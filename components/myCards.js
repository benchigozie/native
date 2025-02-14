import { View, Text, Pressable, ActivityIndicator, TextInput } from 'react-native';
import React, { useState, useContext } from 'react';
import { StyleSheet } from 'react-native';
import Cards from './cards';
import { AuthContext } from '../context/authContext';
import axios from 'axios';
import { set } from 'react-hook-form';

const MyCards = () => {

  const { user } = useContext(AuthContext);

  const [registerMode, setRegisterMode] = useState(false);
  const [recievedCard, setRecievedCard] = useState(false);
  const [cardName, setCardName] = useState('');
  const [cardUID, setCardUID] = useState('');
  const [saveStatus, setSaveStatus] = useState(false);
  const [saveStatusMessage, setSaveStatusMessage] = useState('');

  const saveCard = async () => {
    console.log('save card');
    if (cardName === '') {
      setSaveStatusMessage("Card Name Cannot be empty required");
      setSaveStatus(true);
      return;
    }
    try {
      await axios.post("https://gauthbackendnodeserver.onrender.com/api/card/register", {

        email: user.email,
        uid: cardUID,
        name: cardName,

      }).then ((response) => {
        console.log("bleh")
        console.log(response.data); 
        if (response.status === 200) {
          setSaveStatusMessage("Card Saved Successfully");
          setSaveStatus(true);
          
        }
        else {
          setSaveStatusMessage("Error saving card");
          setSaveStatus(true);
          
        }
      })
  } finally {
    setRegisterMode(false);
    setRecievedCard(false);
  }
};

const cancelRegistration = () => {
  setRegisterMode(false);
};


  const handleChangeText = (text) => {
    setCardName(text);
    console.log(text);
  };

  const addNewCard = async () => {
    console.log('add new card');
    setCardName('');
    setCardUID('');
    setRegisterMode(true);
    setRecievedCard(false);
    setSaveStatus(false);
    try {
      await axios.get("http://192.168.0.240/register")
        .then(async (response) => {

          if (response.data.status === 408) {
            setRegisterMode(false);
            return;
          }
          console.log(response.data);
          setRecievedCard(true);
          setCardUID(response.data.uid);
        })
    } finally {

    }
  }
  const { myCards, myCardsText, addACardText, someButtonStyle } = styles;
  return (
    <View style={myCards}>
      <Text style={myCardsText}>My Cards</Text>
      {
        registerMode ? <Text>Register Mode:</Text> : <Cards />
      }
      {
       !registerMode ?
        <Pressable style={someButtonStyle} onPress={addNewCard}>
          <Text style={addACardText} >Add a Card</Text>
        </Pressable>
         : <Pressable style={someButtonStyle} onPress={cancelRegistration}>
          <Text style={addACardText}>Cancel</Text>  
         </Pressable>
      }
      
      {
        registerMode ?
          <View>
            {
              !recievedCard ?
                <View>
                  <Text style={{
                    textAlign: 'center',
                  }}>Scanning New Card...</Text>
                  <ActivityIndicator size="large" color="#1B9DC0" />

                </View> :
                <View>
                  <Text style={{
                    textAlign: 'center',
                  }}>Card Recieved Successfully</Text>
                </View>
            }
            
          </View> : null
      }
      {
        saveStatus ?
          <Text style={{
            textAlign: 'center',
          }}>{saveStatusMessage}</Text> : null
      }

      {
        recievedCard ?
          <View>
            <TextInput placeholder="Enter Card Name" onChangeText={handleChangeText}/>
            <Pressable onPress={saveCard} style={
              {
                backgroundColor: '#83D9F1',
                padding: 10,
                borderRadius: 5,
                width: 100,
              }
            }>
              <Text style={{textAlign: 'center'}}>Save Card</Text>
            </Pressable>
          </View> : null
      }
      
    </View>
  )
}


const styles = StyleSheet.create({
  myCards: {
    width: 300,
    backgroundColor: '#D9D9D9',
    padding: 20,
    alignSelf: 'center',
    borderRadius: 6,
    margin: 70,
    gap: 25,
  },
  myCardsText: {
    fontWeight: 500,
  },
  addACardText: {
    textAlign: 'center',
    color: 'white',
  },
  someButtonStyle: {
    backgroundColor: '#1679AB',
    padding: 10,
    width: 100,
    borderRadius: 5,

  },
})

export default MyCards;