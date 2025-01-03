import { View, Text, Pressable, Button, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import Register from '../components/register';
import Login from '../components/login';
import { useState } from 'react';
import { AuthContext } from '../context/authContext';
import { Redirect } from 'expo-router';




const Main = () => {

  const { containerStyle, msgBox, externalContainer, screenChoice, screenOption, logo } = styles;



  const [screen, setScreen] = useState('register');

  const { userToken } = useContext(AuthContext);
 

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
            <View style={logo}></View>
            <Text>G-AUTH</Text>
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
            <View style={msgBox}>
              <Text>Some text response to your input</Text>
            </View>

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
  msgBox: {
    backgroundColor: '#e0d5b6',
    padding: 15,
    borderRadius: 6,
    borderColor: '#b5953c',
    borderWidth: 1
    ,
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