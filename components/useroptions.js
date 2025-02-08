import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useContext, useState } from 'react';
import StatusIndicator from './statusindicator';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthContext } from '../context/authContext';
import axios from 'axios';









const UserOptions = ({ userEmail, userStatus, getAllUsers, setIsloading, userRole }) => {

  const [viewState, setViewState] = useState(false);

  const handleViewState = () => {
    setViewState(!viewState);
  };

  const { user } = useContext(AuthContext);
 const promoteUser = async () => {
  setIsloading(true);
  try {
    await axios.put("http://192.168.0.4:3000/api/user/promote", {
      email: userEmail,
    })
  } finally {
    
    getAllUsers();
    setIsloading(false);
  }
};

const demoteUser = async () => {
  setIsloading(true);
  try {
    await axios.put("http://192.168.0.4:3000/api/user/demote", {
      email: userEmail,
    })
  } finally {
    
    getAllUsers();
    setIsloading(false);
  }
};
  

  const enableUser = async () => {
    setIsloading(true);
    try {
      await axios.put("http://192.168.0.4:3000/api/user/enable", {
        email: userEmail,
      })
    } finally {
      
      getAllUsers();
      setIsloading(false);
    }
  };


  const disableUser = async () => {
    console.log('now in disable user function')
    setIsloading(true);
    try {
      await axios.put("http://192.168.0.4:3000/api/user/disable", {
        email: userEmail,
      })
    } finally {
      
      getAllUsers();
      setIsloading(false);
    }
  };

  const deleteUser = async () => {
    setIsloading(true);
    try {
      await axios.put("http://192.168.0.4:3000/api/user/delete", {
        email: userEmail,
      })
    } finally {
      
      getAllUsers();
      setIsloading(false);
    }
  };


  return (
    <SafeAreaView>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 50,
        padding: 20,
      }}>


        <View style={{
          gap: 10,
        }}>

          <View style={{
            gap: 10,
          }}>
            <Pressable>
              <View style={{
                flexDirection: 'row',
                //justifyContent: 'space-between',
                gap: 40,
                backgroundColor: '#83D9F1',
                padding: 10,
                borderRadius: 5,
                //flexGrow: 0,
              }}>
                <Text>Status</Text>
                <Text>{userStatus} <StatusIndicator color={userStatus == "active" ? "green": "red"}></StatusIndicator></Text>
              </View>

            </Pressable>
            {
              user.role == "admin" || user.role == "master" ? 
              <Pressable style={{
                backgroundColor: "#4e5154",
                borderRadius: 5,
              }} onPress={ userRole == "staff" ? promoteUser : demoteUser }>
                <View style={{
                  flexDirection: 'row',
                  //justifyContent: 'space-between',
                  gap: 40,
                  padding: 10,
                  //flexGrow: 0,
                }}>
                  
                  {userRole == "admin" ? <Text style={{ color: "#f0f1f2"}}>Demote this user</Text> : <Text style={{ color: "#f0f1f2"}}>Promote this user</Text>} 
                </View>
  
              </Pressable>
              : null
            }
            
          </View>

        </View>
        {
          user.role == "admin" || user.role == "master" ? 
          <View style={{
            gap: 10,
          }}>
          
              {
                userStatus == "active" ?
                <Pressable style={{
                  backgroundColor: '#1B9DC0',
                  borderRadius: 5,
                }} onPress={() => disableUser(userEmail)}>
                  <Text style={{
                    color: '#EDE5E5',
                    padding: 10,
                  }}>Disable User</Text>
                  </Pressable>
                  :
                  <Pressable  style={{
                    backgroundColor: '#1B9DC0',
                    borderRadius: 5,
                  }} onPress={() => enableUser(userEmail)}>   
                  <Text style={{
                    color: '#EDE5E5',
                    padding: 10,
                  }}>Enable User</Text>
                  </Pressable>
              }
          
            <Pressable style={{
                    backgroundColor: '#EC2C2C',
                    borderRadius: 5,
                  }} onPress={() => {
              deleteUser(userEmail);
            }}>
              <Text style={{
                color: '#EDE5E5',
                padding: 10,
              }}>Delete User</Text>
            </Pressable>
          </View>
          : null
        }
          <View style={{
            gap: 10,
          }}>
          
              {
                userStatus == "active" ?
                <Pressable style={{
                  backgroundColor: '#1B9DC0',
                  borderRadius: 5,
                }} onPress={() => disableUser(userEmail)}>
                  <Text style={{
                    color: '#EDE5E5',
                    padding: 10,
                  }}>Disable User</Text>
                  </Pressable>
                  :
                  <Pressable  style={{
                    backgroundColor: '#1B9DC0',
                    borderRadius: 5,
                  }} onPress={() => enableUser(userEmail)}>   
                  <Text style={{
                    color: '#EDE5E5',
                    padding: 10,
                  }}>Enable User</Text>
                  </Pressable>
              }
          
            <Pressable style={{
                    backgroundColor: '#EC2C2C',
                    borderRadius: 5,
                  }} onPress={() => {
              deleteUser(userEmail);
            }}>
              <Text style={{
                color: '#EDE5E5',
                padding: 10,
              }}>Delete User</Text>
            </Pressable>
          </View>
          
   
      </View>
    </SafeAreaView>

  )
}

export default UserOptions;

const styles = StyleSheet.create({})