import { Redirect, useRouter } from "expo-router";
import { createContext, useContext, useEffect, useState} from "react";
import AsyncStorage from  '@react-native-async-storage/async-storage';


export const AuthContext = createContext();





 export const AuthProvider = (props) => {

    const [ isLoading, setIsloading ] = useState(false);
    const [ userToken, setUserToken ] = useState(null);
    const [user, setUser] = useState(null);
    
   
    const router = useRouter();

    const login = (token, userI) => {

        setIsloading(true);
        setUserToken(token);

        const userObj = {
            name : userI.name,
            email: userI.email,
            role: userI.role,
            status: userI.status
        }

        
        setUser(userObj);
        AsyncStorage.setItem('userToken', token);
        AsyncStorage.setItem('userName', userI.name);
        AsyncStorage.setItem('userEmail', userI.email);
        AsyncStorage.setItem('userRole',  userI.role);
        AsyncStorage.setItem('userStatus', userI.status);

        setIsloading(false);
        
    };

    const logout = () => {
        setIsloading(true); 
        setUserToken(null);
        setUser(null);
        AsyncStorage.removeItem('userToken');
        AsyncStorage.removeItem('user');
        setIsloading(false);
        router.replace('(index)');
    };

    const isLoggedIn = async () => {
        try {
            setIsloading(true)
            let userTokenMem = await AsyncStorage.getItem('userToken'); 
            let userNameMem = await AsyncStorage.getItem('userName');
            let userEmailMem = await AsyncStorage.getItem('userEmail');
            let userRoleMem = await AsyncStorage.getItem('userRole');
            let userStatusMem = await AsyncStorage.getItem('userStatus');

            const userMem = {
                name: userNameMem,
                email: userEmailMem,
                role: userRoleMem,
                status: userStatusMem
            }

            setUserToken(userTokenMem);
            setUser(userMem);
            setIsloading(false);
            
        
        } catch (e) {
            console.log(`is Logged in error ${e}`);
        }
        
    }

    

    useEffect(() => {
        isLoggedIn();
    },[])

    return (
        <AuthContext.Provider value={{login, logout, isLoading, userToken, user}}>
        {props.children}
        </AuthContext.Provider>
    )
   
};