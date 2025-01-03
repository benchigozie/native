import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import Cards from './cards';

const MyCards = () => {

    const { myCards, myCardsText, addACardText } = styles;
  return (
    <View style={myCards}>
      <Text style={myCardsText}>My Cards</Text>
      <Cards />
      <Pressable>
        <Text style={addACardText}>Add a Card</Text>
      </Pressable>
      
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
        textAlign: 'right', 
    }
})

export default MyCards;