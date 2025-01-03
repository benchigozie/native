import React, { useContext } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from "../../components/home";
import { AuthContext } from "../../context/authContext";
import { Redirect } from "expo-router";



export default function Page() {

const {userToken} = useContext(AuthContext);


//if (userToken == null){
 // return <Redirect href='notifications' />
 // console.log(userToken);
//}

  return (
      <SafeAreaView>
        <Home />
      </SafeAreaView>


  );
}

