import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';
import MyCards from './myCards';
import { AuthContext } from '../context/authContext';

const Account = () => {

  const { accountButton, accountOptions, centerText, accountHead } = styles;

  const { logout } = useContext(AuthContext);

  return (
    <SafeAreaView style={accountOptions}>
        <Text style={accountHead}>Account</Text>
            <View style={{
                backgroundColor: '#D9D9D9',
                padding: 50,
                gap: 6,
            }}>
                
                <Pressable style={accountButton} onPress={logout}>
                
                        <Text style={centerText}>Logout</Text>
                    
                </Pressable>  
            </View>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
    accountButton: {
        backgroundColor: '#ffffff',
        height: 45,
        width: 330,
   
        
        justifyContent: 'center',

    },
    accountOptions: {
        alignItems: 'center',
        gap: 50,
        
    },
    centerText: {
        textAlign: 'center',
    },
    accountHead: {
        fontSize: 20,
        color: '#1B9DC0',
    },
});

export default Account;