import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useContext, useState } from 'react';
import StatusIndicator from './statusindicator';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthContext } from '../context/authContext';
import axios from 'axios';








const UserOptions = ({ userEmail, userStatus, getAllUsers, setIsloading }) => {

 // const { user } = useContext(AuthContext);

  

  const enableUser = async () => {
    setIsloading(true);
    try {
      await axios.put("http://192.168.0.4:3000/api/user/enable", {
        email: userEmail,
      })
    } finally {
      
      getAllUsers();
      setIsloading(false);
    }
  };


  const disableUser = async () => {
    console.log('now in disable user function')
    setIsloading(true);
    try {
      await axios.put("http://192.168.0.4:3000/api/user/disable", {
        email: userEmail,
      })
    } finally {
      
      getAllUsers();
      setIsloading(false);
    }
  };

  const deleteUser = async () => {
    setIsloading(true);
    try {
      await axios.put("http://192.168.0.4:3000/api/user/delete", {
        email: userEmail,
      })
    } finally {
      
      getAllUsers();
      setIsloading(false);
    }
  };


  return (
    <SafeAreaView>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 50,
        padding: 20,
      }}>


        <View style={{
          gap: 10,
        }}>

          <View style={{
            gap: 10,
          }}>
            <Pressable>
              <View style={{
                flexDirection: 'row',
                //justifyContent: 'space-between',
                gap: 40,
                backgroundColor: '#83D9F1',
                padding: 10,
                borderRadius: 5,
                //flexGrow: 0,
              }}>
                <Text>Card 1</Text>
                <Text>Active <StatusIndicator color='green'></StatusIndicator></Text>
              </View>

            </Pressable>
            <Pressable>
              <View style={{
                flexDirection: 'row',
                //justifyContent: 'space-between',
                gap: 40,
                backgroundColor: '#83D9F1',
                padding: 10,
                borderRadius: 5,
                //flexGrow: 0,
              }}>
                <Text>Card 2</Text>
                <Text>Active <StatusIndicator color='green'></StatusIndicator></Text>
              </View>

            </Pressable>
          </View>

        </View>
        <View style={{
          gap: 10,
        }}>
        
            {
              userStatus == "active" ?
              <Pressable onPress={() => disableUser(userEmail)}>
                <Text style={{
                  backgroundColor: '#1B9DC0',
                  color: '#EDE5E5',
                  padding: 10,
                }}>Disable User</Text>
                </Pressable>
                :
                <Pressable onPress={() => enableUser(userEmail)}>   
                <Text style={{
                  backgroundColor: '#1B9DC0',
                  color: '#EDE5E5',
                  padding: 10,
                }}>Enable User</Text>
                </Pressable>
            }
        
          <Pressable onPress={() => {
            deleteUser(userEmail);
          }}>
            <Text style={{
              backgroundColor: '#EC2C2C',
              color: '#EDE5E5',
              padding: 10,
            }}>Delete User</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>

  )
}

export default UserOptions;

const styles = StyleSheet.create({})