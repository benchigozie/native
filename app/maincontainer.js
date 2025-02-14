import { View, Text, Pressable, Button, StyleSheet } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import Register from '../components/register';
import Login from '../components/login';
import { useState } from 'react';
import { AuthContext } from '../context/authContext';
import { Redirect } from 'expo-router';





const Main = () => {

  const { containerStyle, externalContainer, screenChoice, screenOption, logo } = styles;



  const [screen, setScreen] = useState('register');

  const { userToken, isLoggedIn, user } = useContext(AuthContext);


  if (userToken) {
    return <Redirect href="(tabs)" />;
  }

  function setScreenLogin() {
    setScreen('login');
  };

  function setScreenRegister() {
    setScreen('register');
  }


  return (
   
        <View style={externalContainer}>
          <StatusBar style='dark' />
          <SafeAreaView style={containerStyle}>
            <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold' }}>G-auth</Text>
            <View style={screenChoice}>
              <Pressable style={[screenOption, { backgroundColor: `${screen == 'register' ? '#1B9DC0' : '#b1b5b2'}` }]} onPress={setScreenRegister}>
                <Text style={{ color: "#edf0ee" }}>Register</Text>
              </Pressable>
              <Pressable style={[screenOption, { backgroundColor: `${screen == 'register' ? '#b1b5b2' : '#1B9DC0'}` }]} onPress={setScreenLogin}>
                <Text style={{ color: "#edf0ee" }}>Login</Text>
              </Pressable>
            </View>

            {
              screen == 'register' ? <Register /> : <Login />
            }
           
          </SafeAreaView>
        </View>
  )
}


const styles = StyleSheet.create({
  containerStyle: {
    padding: 25,
    gap: 20,

  },
  externalContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  screenChoice: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',

  },
  screenOption: {
    width: 150,
    padding: 20,
    borderRadius: 6,

  },
  logo: {
    height: 100,
  },
});

export default Main;