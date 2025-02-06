import React, { useState, useContext } from "react";
import { Text, Pressable, StyleSheet, View } from "react-native";
import axios from "axios";
import { AuthContext } from "../context/authContext";

const Unlock = () => {

    const { unlockButton, unlockText, container } = styles;

    const [lockState, setRespons] = useState('');

    const { user } = useContext(AuthContext);

    

    const unlockDoor = async () => {


        await axios.get('http://192.168.0.240/unlock')
            .then((response) => {
                console.log(response.data);
                if (response.data.status === 200) {
                    sendAppUnlockNotification();
                }
                
            })
            .catch((error) => {
                console.error("error stuff:", error);
            })


    };

    const sendAppUnlockNotification = async () => {

        const notification = {
            name: user.name,
            type: 'appunlock',
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

    return (
        <View style={container}>
            <Pressable style={unlockButton} onPress={() => {
                unlockDoor();
            }}>
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
        color: '#F8F0F0',
        textAlign: 'center',
        fontSize: 16,
    },
    container: {
        alignItems: "center",
        paddingVertical: 60,
    },
});

export default Unlock;