import React, { useContext, useState } from "react";
import { Text, Pressable, StyleSheet, View, Switch } from "react-native";
import axios from "axios";
import { AuthContext } from "../context/authContext";

const Disable = () => {

    const { disableExitButton, disableExitButtonText, container } = styles;
    const [buttonState, setButtonState] = useState("disabled");

    const { user } = useContext(AuthContext);

    const sendEnableNotification = async () => {

        const notification = {
            name: user.name,
            type: 'enable',
            time: getFormattedTime(),
        };

        console.log(notification);
        await axios.post ('http://192.168.0.4:3000/api/notification/storenotification', notification);
    };

    const sendDisableNotification = async () => {

        const notification = {
            name: user.name,
            type: 'disable',
            time: getFormattedTime(),
        };

        console.log(notification);
        await axios.post ('http://192.168.0.4:3000/api/notification/storenotification', notification);
    };

    const getFormattedTime = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
    
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    };

    const disableSensor = async () => {
        await axios.get('http://192.168.0.240/disable')
        .then ((response) => {
          console.log(response.data);
          setButtonState("disabled");
          sendDisableNotification();
        })
        .catch((error) => {
          //console.error("error stuff:", error);
        })
        
    };

    const enableSensor = async () => {

        await axios.get('http://192.168.0.240/enable')
        .then ((response) => {
          console.log(response.data);
          setButtonState("enabled");
          sendEnableNotification();
        })
        .catch((error) => {
          //console.error("error stuff:", error);
        })
        //console.log("enabling");
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