import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';

import UserOptions from '../../components/useroptions';


const Users = () => {
  return (
    <SafeAreaView style={{
        backgroundColor: '#D9D9D9',
        flex: 1,    
        }}>
        <ScrollView style={{
            
            padding: 10,
        }}>
          <Text>users</Text>
          <View style={{
            //check if shadow later works
             shadowOffset: { width: 0, height: 4 },
             shadowOpacity: 0.8,
             shadowRadius: 2,  
             elevation: 7,
             shadowColor: '#000'
          }}>
            <View style={{
                backgroundColor: '#ffffff',
                
                //gap: 30,
                borderRadius: 6,
            }}>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 50,
                    padding: 40,
                    
                }}>
                    <View style={{
                        borderRadius: 100,
                        backgroundColor: '#D9D9D9',
                        width: 80,
                        overflow: 'hidden',
                    }} >
                        <AntDesign name="user" size={80} color="black"/>
                    </View>
                    <View style={{
                        gap: 10,
                    }}>
                        <Text>Dr. Bluuu Huuuuuu</Text>
                        <Text>Role: Admin</Text>
                    </View>
                    
                </View>
                <UserOptions />
                
                
                
            </View>
          </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Users

const styles = StyleSheet.create({})