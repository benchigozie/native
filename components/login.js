import { StyleSheet, Text, View, TextInput, Button, Pressable } from 'react-native'
import React from 'react';
import { useState, useContext } from 'react';
import { Formik } from 'formik';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Fontisto from '@expo/vector-icons/Fontisto';
import { AuthContext } from '../context/authContext';

import * as yup from 'yup';
import axios from 'axios';


const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required(),
  password: yup.string().required().min(8, 'Password must be 8 characters long'),
})






const Login = () => {

  const { userToken, isLoading, login, logout } = useContext(AuthContext);







  const { inputStyle, textInputStyle, innerField, formStyle, smallGap, redText } = styles;

  const [hidden, setHidden] = useState(true);

  const handleVisibilityChange = () => {
    setHidden(!hidden);
  }

  return (
    <Formik initialValues={{
      email: "",
      password: "",
    }}
      onSubmit={
        async (values) => {
          await axios.post("http://192.168.86.81:3000/api/user/login", values)
          .then((response) => {
            if(response.status === 200) {
              console.log('200 stuff')
              login(response.data.accessToken, response.data.user)
            }
            
          })
          .catch((error) => {
            console.log(error.response.data.error)
          });
        }
      }
      validationSchema={validationSchema}
      >
        {
          ({ handleChange, handleBlur, handleSubmit, values, errors }) => {
            return (
              <View style={formStyle}>

        <View style={smallGap}>
          <Text>email:</Text>
          <View style={inputStyle}>

            <Fontisto style={innerField} name="email" size={24} color="#1B9DC0" />
            <TextInput placeholder="markdan@gmail.com" numberOfLines={1} style={textInputStyle} selectionColor='#1B9DC0' onChangeText={handleChange('email')}/>
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

            <TextInput placeholder="*******" secureTextEntry={hidden} numberOfLines={1} style={textInputStyle} selectionColor='#1B9DC0' onChangeText={handleChange('password')}/>
          </View>

        </View>
        <Button title='Login' onPress={handleSubmit}></Button>

        <View>
                      {
              errors.email ? <Text style={redText}>{errors.email}</Text> : ""
            }
                      {
              errors.password ? <Text style={redText}>{errors.password}</Text> : ""
                      }
          </View>
      </View>

            )
          }
        }
      
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
    height: 35,
  },
  innerField: {
    width: 24,
  },
  formStyle: {
    gap: 12,
  },
  smallGap: {
    gap: 5,
  },
  redText : {
    color: 'red',
  }
})