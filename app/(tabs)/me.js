import { View, Text } from 'react-native';
import React from 'react';
import CurrentUser from '../../components/currentuser';
import { SafeAreaView } from 'react-native-safe-area-context';

import MyCards from '../../components/myCards';
import Account from '../../components/account';
import { ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Me = () => {

  

  return (
    <SafeAreaView>
      <ScrollView>
        <CurrentUser />
        <MyCards />
        <Account />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Me;