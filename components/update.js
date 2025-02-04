import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import axios from 'axios';

const Update = () => {

    const { updateButton, updateButtonText, container } = styles;

    const updateSystem = async () => {
        await axios.get('http://192.168.0.240/update')
        .then ((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error("error stuff:", error);
        })
        console.log("updating");
    };

    return (
        <View style={container}>
            <Pressable style={updateButton} onPress={updateSystem}>
                <Text style={updateButtonText} >Update the system</Text>
            </Pressable>
        </View>

    )
}

export default Update;

const styles = StyleSheet.create({
    updateButton: {
        backgroundColor: '#1B9DC0',
        width: 320,
        borderRadius: 4,
        height: 45,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    updateButtonText: {
        color : '#F8F0F0',
        fontSize: 16,
        
    },
    container: {
        alignItems: "center",
        paddingVertical: 60,
    },
});