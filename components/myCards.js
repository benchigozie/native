import { View, Text, Pressable, ActivityIndicator, TextInput } from 'react-native';
import React, { useState, useContext } from 'react';
import { StyleSheet } from 'react-native';
import Cards from './cards';
import { AuthContext } from '../context/authContext';
import axios from 'axios';

const MyCards = () => {

  const { user } = useContext(AuthContext);

  const [registerMode, setRegisterMode] = useState(false);
  const [recievedCard, setRecievedCard] = useState(false);
  const addNewCard = async () => {
    console.log('add new card');
    setRegisterMode(true);
    setRecievedCard(false);
    try {
      await axios.get("http://192.168.0.240/register")
        .then(async (response) => {

          if (response.data.status === 408) {
            setRegisterMode(false);
            return;
          }
          console.log(response.data);
          setRecievedCard(true);
          await axios.post("http://192.168.0.4:3000/api/card/register", {

            email: user.email,
            uid: response.data.uid,
          })
        })
    } finally {

    }
  }
  const { myCards, myCardsText, addACardText } = styles;
  return (
    <View style={myCards}>
      <Text style={myCardsText}>My Cards</Text>
      <Cards />
      {
       !registerMode ?
        <Pressable style={
          {
            backgroundColor: '#1679AB',
            padding: 10,
            width: 100,
            borderRadius: 5,
  
          }
        } onPress={addNewCard}>
          <Text style={addACardText} >Add a Card</Text>
        </Pressable>
         : null
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
        recievedCard ?
          <View>
            <TextInput placeholder="Enter Card Name" />
            <Pressable style={
              {
                backgroundColor: '#83D9F1',
                padding: 10,
                borderRadius: 5,
                width: 100,
              }
            }>
              <Text>Save Card</Text>
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
  }
})

export default MyCards;