import { View, Text, StyleSheet, ActivityIndicator, Pressable } from 'react-native';
import React, { useState, useContext, useEffect } from 'react';
import StatusIndicator from './statusindicator';
import axios from 'axios';
import { AuthContext } from '../context/authContext';

const Cards = () => {

  const [myCards, setMyCards] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  const { user } = useContext(AuthContext);
  console.log(user);


  const { cardView, cardStatus, cardSubsection, bleButton, deleteCardButton, cardsView } = styles;

  const getMyCards = async () => {
    try {
      await axios.get('https://gauthbackendnodeserver.onrender.com/api/card/mycards', {
        params: {
          email: user.email,
        },
      })
        .then((response) => {
          setMyCards(response.data);
          console.log(response.data);
          console.log(user.email);
        })
    } finally {
      setIsloading(false)
    };

  };

  const enableCard = async (card) => {
    setIsloading(true);
    try {
      await axios.put("https://gauthbackendnodeserver.onrender.com/card/enable", {
        email: card.email,
        name: card.name,
      })
    } finally {
      
      getMyCards();
      setIsloading(false);
    }
  };


  const disableCard = async (card) => {
    setIsloading(true);
    try {
      await axios.put("https://gauthbackendnodeserver.onrender.com/api/card/disable", {
          email: card.email,
          name: card.name,        
      })
    } finally {
      
      getMyCards();
      setIsloading(false);
    }
  };

  const deleteCard = async (card) => {
    setIsloading(true);
    try {
      await axios.put("https://gauthbackendnodeserver.onrender.com/api/card/delete", {
        email: card.email,
        name: card.name,
      })
    } finally {
      
      getMyCards();
      setIsloading(false);
    }
  };

  useEffect(() => {
    getMyCards();
  }, []);

  if (isLoading) {
    return <ActivityIndicator size="large" />
  }
  else {
    return (
      <View style={cardsView}>
      {myCards.length === 0 ? (
        <Text>No cards available</Text> // If no cards returned, show a message
      ) : (
        myCards.map((card, index) => (
          <View key={index} style={cardView}>
          <View style={cardSubsection}>
          <Text>{card.name}</Text>
            <View style={cardStatus}>
              <Text>{card.status}</Text>
              <StatusIndicator color={card.status === 'active' ? 'green' : 'red'} />
            </View>         
          </View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Pressable style={bleButton} onPress={card.status == "active" ? () => {disableCard(card)} :  () => { enableCard(card) } }>
          {card.status === 'active' ? (<Text>Disable Card</Text>) : (<Text>Enable Card</Text>)}
          </Pressable> 
          <Pressable style={deleteCardButton} onPress={() => { deleteCard(card) }}>
            <Text>Delete Card</Text>  
          </Pressable>     
          </View>
               
          </View>
        ))
      )}
    </View>

    )
  };
}

const styles = StyleSheet.create({
  cardSubsection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 6,
    gap: 10,
  },
  cardsView: {
    gap: 10,
  },
  cardStatus: {
    flexDirection: 'row',
    gap: 3,
    alignItems: 'center',
  },
  bleButton: {
    backgroundColor: '#83D9F1',
    padding: 10,
    borderRadius: 5,
    width: 100,
  },
  deleteCardButton: {
    backgroundColor: '#F1A9A0',
    padding: 10,
    borderRadius: 5,
    width: 100,
  },
});

export default Cards;