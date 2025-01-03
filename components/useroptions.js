import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react';
import StatusIndicator from './statusindicator';
import { SafeAreaView } from 'react-native-safe-area-context';

const UserOptions = () => {
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
            <Pressable>
              <Text style={{
                backgroundColor: '#1B9DC0',
                color: '#EDE5E5',
                padding: 10,
              }}>Disable User</Text>
            </Pressable>
            <Pressable>
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