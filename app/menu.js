import React from 'react';
import { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, BackHandler} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import Drawer from 'expo-router/drawer';
// probably wrong import Me from './(app)/(tabs)/me';


const Menu = () => {

  const { listCon, listItem } = styles;
    
  useEffect(() => {

    //BackHandler.addEventListener('hardwareBackPress', handleBackPress);
  
  });

  return (
    <SafeAreaView>
      <View style={listCon}>
        <Link style={listItem} href={'/me'}>Me</Link>        
        <Link style={listItem} href={'/'}>Home</Link>
        <Link style={listItem} href={'notifications'}>Notifications</Link>
        <Link style={listItem} href={'/users'}>Users</Link>
      </View>
    </SafeAreaView>

  );
};

/* const handleBackPress = () => {
  
}; */



const styles = StyleSheet.create({
  listCon : {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get("window").height - 80,
    gap: '30',
  },
  listItem : {
    fontSize : 35,
    textAlign: 'center',
  },
})
export default Menu ;