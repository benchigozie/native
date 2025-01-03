import React from "react";
import { View, StyleSheet } from "react-native";


const StatusIndicator = (prop) => {

    const { color } = prop;
    console.log(prop);

    return (
        <View style={{
            backgroundColor: color,
            width: 9,
            height: 9,
            borderRadius: 100,
        }}></View>
    )
};


export default StatusIndicator;