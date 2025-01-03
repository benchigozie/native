import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import StatusIndicator from "./statusindicator";

/*const securityLogs = [
    
];*/

let dated = new Date().toLocaleString();
console.log(dated);


const Logs = () => {
    const { logstyle, logHead, logs, Bold, Gray } = styles;
    return (
        <View style={logstyle}>
            <Text style={[ logHead, Bold ]}>Security Logs</Text>
            <View style={logs}>
                <View>
                    <Text style={[ Bold, Gray]}>Today</Text>
                </View>
                <View>
                    <Text style={[ Bold, Gray]}>Yesterday</Text>
                </View>
                <View>
                    <Text style={[ Bold, Gray]}>Older</Text>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
   
    logstyle: {
        backgroundColor: '#fff',
        shadowColor: '#000',
        width: 320,
        alignSelf: 'center',
        borderRadius: 4,
        padding: 25,
        gap: 20,
        marginBottom: 60,

        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 7,
    },
    logHead: {
        fontSize: 17,
    },
    Bold: {
        fontWeight: 500,
    },
    Gray: {
        color: '#3b4040',
    },
})

export default Logs;