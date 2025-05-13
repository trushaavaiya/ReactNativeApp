import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';  // drawer navigator
import DashboardScreen from './DashboardScreen';
import SettingScreen from './SettingScreen';

const Drawer = createDrawerNavigator();  // create drawer navigator

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Dashboard">
                <Drawer.Screen name="Dashboard" component={DashboardScreen} />
                <Drawer.Screen name="Settings" component={SettingScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
