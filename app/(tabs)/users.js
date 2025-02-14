import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';

import UserOptions from '../../components/useroptions';
import axios from 'axios';
import { AuthContext } from '../../context/authContext';


const Users = () => {

    const [allUsers, setAllUsers] = useState([]);
    const [ isLoading, setIsloading ] = useState(true);

    const { user } = useContext(AuthContext)
    

    const getAllUsers = async ( ) => {
        try {
            await axios.get("https://gauthbackendnodeserver.onrender.com/api/user/all")
                                .then((response) => {
                                    setAllUsers(response.data);
                                    
                                })
        } finally {
            setIsloading(false)
        }
        
    };


    useEffect(() => {
        getAllUsers();
    }, [])

    
    
    if (isLoading) {
        return <ActivityIndicator size="large"/>
    }
    else {

        return (
            <SafeAreaView style={{
                backgroundColor: '#D9D9D9',
                flex: 1,
            }}>
                <ScrollView style={{
    
                    padding: 10,
                }}>
                    <Text style={{
                        fontSize: 25,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        marginBottom: 10,
                    }}>users</Text>
                    <View style={{
                        gap:10,
                        //check if shadow later works
                        //shadowOffset: { width: 0, height: 4 },
                        //shadowOpacity: 0.8,
                        //shadowRadius: 2,
                        //elevation: 7,
                        //shadowColor: '#000'
                    }}>
                       
                          
                                
                                    
                        {allUsers
                        .filter((userfil) => userfil.email !== user.email)
                        .map((personnel) => {
                                        return (<View key={personnel.email} style={{
                                            backgroundColor: '#ffffff',
                                            shadowOffset: { width: 0, height: 4 },
                                            shadowOpacity: 0.8,
                                            shadowRadius: 2,
                                            elevation: 7,
                                            shadowColor: '#000',
                                            //gap: 30,
                                            borderRadius: 6,
                                        }}>
                        
                                            <View style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                gap: 50,
                                                padding: 40,
                        
                                            }}>
                                                <View style={{
                                                    borderRadius: 100,
                                                    backgroundColor: '#D9D9D9',
                                                    width: 80,
                                                    overflow: 'hidden',
                                                }} >
                                                    <AntDesign name="user" size={80} color="black" />
                                                </View>
                                                <View style={{
                                                    gap: 10,
                                                }}>
                                                    <Text style={{
                                                        fontSize: 20,
                                                        fontWeight: 'bold',
                                                    }}>{personnel.name}</Text>
                                                    <Text>Role: {personnel.role}</Text>
                                                </View>
                        
                                            </View>
                                            <UserOptions userEmail={personnel.email} userStatus={personnel.status} getAllUsers={getAllUsers} setIsloading={setIsloading} userRole={personnel.role}/>
                        
                        
                        
                                        </View>)
                                    })
                                    }
    
                        
                    </View>
                </ScrollView>
            </SafeAreaView>
        )

    }


    
}

export default Users

const styles = StyleSheet.create({})