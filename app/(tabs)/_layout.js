import { Tabs } from "expo-router";
import { Redirect } from "expo-router";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/authContext";
import { Ionicons } from "@expo/vector-icons";

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
        <Tabs 
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "index") {
                    iconName = focused ? "home" : "home-outline";
                } else if (route.name === "me") {
                    iconName = focused ? "person" : "person-outline";
                } else if (route.name === "users") {
                    iconName = focused ? "people" : "people-outline";
                }

                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#1679AB",
            tabBarInactiveTintColor: "gray",
        })}
        >
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

