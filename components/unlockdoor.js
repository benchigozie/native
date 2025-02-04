import React, { useState } from "react";
import { Text, Pressable, StyleSheet, View } from "react-native";
import axios from "axios";

const Unlock = () => {

    const { unlockButton, unlockText, container } = styles;

    const [lockState, setRespons] = useState('');

  const unlockDoor = async () => {

        
      await axios.get('http://192.168.0.240/unlock')
      .then ((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.error("error stuff:", error);
      })
    

  };

    return (
        <View style={container}>
            <Pressable style={unlockButton} onPress={unlockDoor}>
                <Text style={unlockText}>Unlock the Door</Text>
            </Pressable>
        </View>
        
    )
};

const styles = StyleSheet.create({
    unlockButton: {
        backgroundColor: '#1B9DC0',
        width: 320,
        borderRadius: 4,
        height: 45,
        justifyContent: 'center',
    },
    unlockText: {
        color : '#F8F0F0',
        textAlign: 'center',
        fontSize: 16,
    },
    container: {
        alignItems: "center",
        paddingVertical: 60,
    },
});

export default Unlock;