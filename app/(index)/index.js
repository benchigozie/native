import React, { useContext } from "react";

import Main from "../maincontainer";
import { AuthContext, AuthProvider } from "../../context/authContext";
import { useRouter } from "expo-router";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

const Index = () => {


        const { isLoading } = useContext(AuthContext);


        if (isLoading) {
                return (
                        <View style={{flex: 1,}}>
                                <StatusBar></StatusBar>
                                <SafeAreaView style={{flex: 1,}}>

                                        <View style={{alignItems: 'center', justifyContent:'center',flex:1,}} >
                                        <ActivityIndicator size='large'/>  
                                        </View>
                        </SafeAreaView>
                        </View>
                        
                )}
               


   return (
        <Main />
    )
};

export default Index;