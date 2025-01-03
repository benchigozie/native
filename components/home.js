import React from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import CurrentUser from './currentuser';
import Unlock from './unlockdoor';
import Disable from './disableExitButton';
import Connection from './connection'; 
import Logs from './logs';
const Home = () => {


    return(
        <View>
            <ScrollView>
                <View>
                    <CurrentUser />
                    <Unlock />
                    <Logs />
                    <Connection />
                    <Disable />
                </View>
            </ScrollView>
            
        </View>
    )
};


export default Home;