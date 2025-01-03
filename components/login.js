import { StyleSheet, Text, View, TextInput, Button, Pressable } from 'react-native'
import React from 'react';
import { useState, useContext } from 'react';
import { Formik } from 'formik';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Fontisto from '@expo/vector-icons/Fontisto';
import { AuthContext } from '../context/authContext';
import { Redirect } from 'expo-router';






const Login = () => {

  const { userToken,isLoading, login, logout } = useContext(AuthContext);


 




    const { inputStyle, textInputStyle, innerField } = styles;

    const [ hidden, setHidden, formStyle, smallGap ]  = useState(true);

    const handleVisibilityChange = () => {
      setHidden(!hidden);
    }
    
  return (
    <Formik initialValues={{
      email : "",
      password: "",
    }} 
    onSubmit={
      (values) => {
        console.log(values);
      }
    }>
      <View style={formStyle}>
        
      <View style={smallGap}>
          <Text>email:</Text>
          <View style={ inputStyle }>
          
             <Fontisto style={innerField} name="email" size={24} color="#1B9DC0" />
            <TextInput placeholder="markdan@gmail.com" numberOfLines={1} style={textInputStyle} selectionColor='#1B9DC0' />
          </View>
          
        </View>
        
        <View style={smallGap}>
          <Text>password:</Text>
          <View style={inputStyle}>
            <Pressable onPress={handleVisibilityChange}>
              { 
                hidden ? <FontAwesome style={innerField} name="eye-slash" size={24} color="#1B9DC0" /> : <FontAwesome style={innerField} name="eye" size={24} color="#1B9DC0" />
              }
            </Pressable>
            
            <TextInput placeholder="*******" secureTextEntry={hidden} numberOfLines={1} style={ textInputStyle } selectionColor='#1B9DC0'/>
          </View>

        </View>
        <Button title='Login' onPress={login}></Button>
      </View>
     
    </Formik>
  )
}

export default Login;

const styles = StyleSheet.create({
  inputStyle: {
    
    flexDirection: 'row',
    gap: 18,
    alignItems: 'center',
    justifyContent: 'space between',
    borderWidth: 1,
    borderColor: '#1B9DC0',
    borderRadius: 8,
    paddingHorizontal: 15,
  },
 
  textInputStyle: {
    width: '230',
    
  },
  innerField: {
    width: 24,
  },
  formStyle: {
    gap: 12,
  },
  smallGap: {
    gap: 5,
  }
})