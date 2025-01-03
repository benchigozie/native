import React from "react";
import { Text, Pressable, StyleSheet, View } from "react-native";

const Unlock = () => {

    const { unlockButton, unlockText, container } = styles;

    return (
        <View style={container}>
            <Pressable style={unlockButton}>
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