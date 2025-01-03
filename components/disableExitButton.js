import React from "react";
import { Text, Pressable, StyleSheet, View, Switch } from "react-native";


const Disable = () => {

    const { disableExitButton, disableExitButtonText, container } = styles;

    return (
        <View style={container}>
            <Pressable style={disableExitButton}>
                <Text style={disableExitButtonText}>Disable the Entrance Sensor</Text>
                <Switch />
            </Pressable>
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
        paddingVertical: 60,
    },
});

export default Disable;