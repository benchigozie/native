import React from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import CurrentUser from './currentuser';
import Unlock from './unlockdoor';
import Disable from './disableExitButton';

import Update from './update';
const Home = () => {


    return(
        <View>
            <ScrollView>
                <View>
                    <CurrentUser />
                    <Unlock />
                    <Disable />
                    <Update />
                </View>
            </ScrollView>
            
        </View>
    )
};


export default Home;