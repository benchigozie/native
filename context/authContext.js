import { Redirect, useRouter } from "expo-router";
import { createContext, useContext, useEffect, useState} from "react";
import AsyncStorage from  '@react-native-async-storage/async-storage';


export const AuthContext = createContext();





 export const AuthProvider = (props) => {

    const [ isLoading, setIsloading ] = useState(false);
    const [ userToken, setUserToken ] = useState(null);
    const [aaa, setaaa] = useState('bluuuu')
   
    const router = useRouter();

    const login = () => {
        setIsloading(true);
        setUserToken('ddd');
        AsyncStorage.setItem('userToken', 'ddd');
        setIsloading(false);
    };

    const logout = () => {
        setIsloading(true); 
        setUserToken(null);
        AsyncStorage.removeItem('userToken');
        setIsloading(false);
        router.replace('(index)');
    };

    const isLoggedIn = async () => {
        try {
            setIsloading(true)
            let userToken = await AsyncStorage.getItem('userToken'); 
            setUserToken(userToken);
            setIsloading(false);
        } catch (e) {
            console.log(`is Logged in error ${e}`);
        }
        
    }

    useEffect(() => {
        isLoggedIn();
    },[])

    return (
        <AuthContext.Provider value={{login, logout, isLoading, userToken}}>
        {props.children}
        </AuthContext.Provider>
    )
   
};