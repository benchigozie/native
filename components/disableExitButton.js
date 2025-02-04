import React, { useState } from "react";
import { Text, Pressable, StyleSheet, View, Switch } from "react-native";
import axios from "axios";

const Disable = () => {

    const { disableExitButton, disableExitButtonText, container } = styles;
    const [buttonState, setButtonState] = useState("disabled");

    const disableSensor = async () => {
        await axios.get('http://192.168.0.240/disable')
        .then ((response) => {
          console.log(response.data);
          setButtonState("disabled");
        })
        .catch((error) => {
          console.error("error stuff:", error);
        })
        
    };

    const enableSensor = async () => {
    
        await axios.get('http://192.168.0.240/enable')
        .then ((response) => {
          console.log(response.data);
          setButtonState("enabled");
        })
        .catch((error) => {
          console.error("error stuff:", error);
        })
        console.log("enabling");
    };



    return (
        <View style={container}>
            {
                buttonState == "disabled" ? 
            <Pressable style={disableExitButton} onPress={enableSensor}>
                <Text style={disableExitButtonText}>Enable the Entrance Sensor</Text>
                <Switch value={
                    buttonState == "disabled" ? false : true
                } onValueChange={enableSensor} />
            </Pressable>
            :
            <Pressable style={disableExitButton} onPress={disableSensor}>
                <Text style={disableExitButtonText}>Disable the Entrance Sensor</Text>
                <Switch value={
                    buttonState == "enabled" ? true : false
                } onValueChange={disableSensor}/>
            </Pressable>
}
        </View>
        
    )
};

const styles = StyleSheet.create({
    disableExitButton: {
        backgroundColor: '#1B9DC0',
        width: 320,
        borderRadius: 4,
        height: 45,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    disableExitButtonText: {
        color : '#F8F0F0',
        fontSize: 16,
    },
    container: {
        alignItems: "center",
        paddingVertical: 30,
    },
});

export default Disable;