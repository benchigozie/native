import React from "react";
import { View, Text, StyleSheet,Pressable } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import StatusIndicator from "./statusindicator";

const Connection = () => {
    const { conntext, connstyle, connoption } = styles;
    return (
        <View style={connstyle}>
            <View style={conntext}>

                <MaterialCommunityIcons name="connection" size={40} color="black" />
                
                <Text style={{fontSize: 18,}}>Connection</Text>
        
            </View>
            
            <Pressable style={connoption}>
                <Text>Local Connection </Text>
                <StatusIndicator color='#ccc' />
            </Pressable>
            <Pressable style={connoption}>
                <Text>Wifi Internet Connection</Text>
                <StatusIndicator color='#ccc' />
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    conntext: {
       flexDirection: 'row',
        alignItems: 'center',
        gap: '4',
       
    },
    connstyle: {
        backgroundColor: '#fff',
        shadowColor: '#000',
        width: 320,
        alignSelf: 'center',
        borderRadius: 4,
        padding: 25,
        gap: 20,

        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 7,
        
    },
    connoption: {
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'space-between',
    },
})

export default Connection;