import { StyleSheet, Text, View, TextInput, Button, Pressable, FlatList } from 'react-native'
import React, { useEffect } from 'react';
import { Formik } from 'formik';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import * as yup from 'yup';
import axios from 'axios';


const validationSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email('Invalid email').required(),
  password: yup.string().required().min(8, 'Password must be 8 characters long'),
  confirm: yup.string().oneOf([yup.ref('password'), null], 'Passwords do not match'),
})



const registerFunc = async () => {
  try {
    await axios.get("http://192.168.151.81:3000/api/user/register");
  } catch (error) {
    console.log(error.message)
  }
  
};


const Register = () => {


  const [hidden, setHidden] = useState(true);

  const [ errorView, setErrorView ] = useState('');

  const setError = (error) => {
    setErrorView(error);
  }

  const handleVisibilityChange = () => {
    setHidden(!hidden);
  }

  const { inputStyle, textInputStyle, innerField, formStyle, smallGap, redText } = styles;

  return (
    <Formik initialValues={{
      name: "",
      email: "",
      password: "",
      confirm: "",
    }}
      onSubmit={
        async (values) => {
          console.log(values)
          await axios.post("http://192.168.0.3:3000/api/user/register", values)
          .then((response) => {
            setError(response.data.success);
          })
          .catch((error) => {
            setError(error.response.data.error)
          })
        }
      }
      validationSchema={validationSchema}>
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => {

        return (<View style={formStyle}>
          <View style={smallGap}>
            <Text>name:</Text>
            <View style={inputStyle}>
              <FontAwesome name="user" size={24} color="#1B9DC0" />
              <TextInput placeholder="Mark Dan" numberOfLines={1} style={textInputStyle} selectionColor='#1B9DC0' onChangeText={handleChange('name')} />
            </View>

          </View>
          <View style={smallGap}>
            <Text>email:</Text>
            <View style={inputStyle}>

              <Fontisto style={innerField} name="email" size={24} color="#1B9DC0" />
              <TextInput placeholder="markdan@gmail.com" numberOfLines={1} style={textInputStyle} selectionColor='#1B9DC0' onChangeText={handleChange('email')} />
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

              <TextInput placeholder="*******" secureTextEntry={hidden} numberOfLines={1} style={textInputStyle} selectionColor='#1B9DC0' onChangeText={handleChange('password')} />
            </View>


          </View>
          <View style={smallGap}>
            <Text>confirm password:</Text>
            <View style={inputStyle}>
              <Pressable onPress={handleVisibilityChange}>
                {
                  hidden ? <FontAwesome style={innerField} name="eye-slash" size={24} color="#1B9DC0" /> : <FontAwesome style={innerField} name="eye" size={24} color="#1B9DC0" />
                }

              </Pressable>

              <TextInput placeholder="*******" secureTextEntry={hidden} numberOfLines={1} style={textInputStyle} selectionColor='#1B9DC0'onChangeText={handleChange('confirm')} />
            </View>

          </View>
          <Button title='register' onPress={handleSubmit}></Button>

        
           {
            errorView ? <Text>{errorView}</Text> : ""
           }
           
          
          
          <View>
            {
              errors.name ? <Text style={redText}>{errors.name}</Text> : ""
            }
                      {
              errors.email ? <Text style={redText}>{errors.email}</Text> : ""
            }
                      {
              errors.password ? <Text style={redText}>{errors.password}</Text> : ""
            }
                   {
              errors.confirm ? <Text style={redText}>{errors.confirm}</Text> : ""
            }
          </View>
         
          
        </View>)



      }}




    </Formik>

  )
}

export default Register

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
  redText: {
    color: 'red',
  },
})