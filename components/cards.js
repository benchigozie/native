import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import StatusIndicator from './statusindicator';

const Cards = () => {

  const { cardView , cardStatus } = styles;
  return (
    <View style={cardView}>
      <Text>Card 1</Text>
      <View style={cardStatus}>
        <Text>Active</Text>
        <StatusIndicator color='green' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 6,
  },
  cardStatus: {
    flexDirection: 'row',
    gap: 3,
    alignItems: 'center',
  },
});

export default Cards;