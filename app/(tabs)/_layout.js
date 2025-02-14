import { Tabs } from "expo-router";
import { Redirect } from "expo-router";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/authContext";

import { io } from "socket.io-client";

const TabsLayout = () => {

    
    const { logout, user } = useContext(AuthContext);
    
    useEffect(() => {

        const socket = io("https://gauthbackendnodeserver.onrender.com", {
            query: { userEmail: user.email }, // Pass user email
        });
        
        socket.on("connect", () => {
            console.log("Connected to WebSocket:", socket.id);
        });
        socket.on("forceLogout", () => {
            console.log("Force logout received, logging out...");
            logout();
        });

        return () => {
            socket.disconnect(); // Clean up when component unmounts
        };
    }, []);
    




 

    return (
        <Tabs>
            <Tabs.Screen name="index"  options={{
                headerShown: false,
                title: 'Home',

            }} />
            <Tabs.Screen name="me"  options={{
                headerShown: false,
                title: 'Me',

            }} />
            <Tabs.Screen name="users"  options={{
                headerShown: false,
                title: 'users',
                
            }} />
            
        </Tabs>
    )
};

export default TabsLayout;

