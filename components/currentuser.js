import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

import AntDesign from '@expo/vector-icons/AntDesign';



const CurrentUser = () => {

    const { frame, user, username, userrole, row } = styles;
  return (
 
    <View  style={{backgroundColor: '#D9D9D9',}}>
      <View style={user}>
        <View style={frame}>
            {
                <AntDesign name="user" size={120} color="black" /> 
            }
        </View>
        
        <Text style={username}>Dr. Bluuuu Huuuuuu</Text>
        <View style={row}>
          <Text style={userrole}>Admin</Text>
          
        </View>
        
      </View>

    </View>

  );
}

const styles = StyleSheet.create({
    frame : {
        borderRadius: 60,
        width: 120,
        height: 'auto',
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      
    },
    user: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 50,
        gap: 20,
    },
    username: {
        textAlign: 'center',
        fontSize: 19,
        fontWeight: 700,
    },
    userrole: {
        textAlign: 'center',
        fontSize: 15,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: '5',
    },
});

export default CurrentUser;