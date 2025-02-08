import { useEffect, useContext } from "react";
import { Alert } from "react-native";
import { AuthContext } from '../context/authContext';
import io from "socket.io-client";

const SERVER_URL = "http://192.168.0.4:3000/api/user"; // Replace with your server URL
let socket;

const useWebSocket = (userEmail) => {

    const { logout } = useContext(AuthContext);

    useEffect(() => {
        if (!userEmail) return;

        socket = io(SERVER_URL, {
            transports: ["websocket"],
            query: { userEmail }, // Send user email to the server
        });

        socket.on("connect", () => console.log("Connected to WebSocket"));
        socket.on("disconnect", () => console.log("Disconnected from WebSocket"));

        // Listen for forced logout
        socket.on("forceLogout", () => {
            Alert.alert("Session Expired", "Your account has been disabled.", [
                { text: "OK", onPress: () => logout() }
            ]);
        });

        return () => socket.disconnect();
    }, [userEmail]);

    return socket;
};

export default useWebSocket;

