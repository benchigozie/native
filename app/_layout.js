import { Stack } from "expo-router";
import { useContext, useEffect } from "react";

import {AuthProvider } from "../context/authContext";


const RootLayout = () => {




    return (

            <AuthProvider>
            <Stack>
                <Stack.Screen name='(index)' options={{
                    headerShown: false,
                    
                }}></Stack.Screen>
                <Stack.Screen name="(tabs)" options={{
                    headerShown: false,
                }} />
 
            </Stack>
            </AuthProvider>
 
    )
};

export default RootLayout;