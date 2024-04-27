/* eslint-disable prettier/prettier */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Test from '../components/Test';
const Tab = createBottomTabNavigator();

export const MainBottomNavigation = () => {
    return (
        <Tab.Navigator
              initialRouteName='Test'
            screenOptions={{
                tabBarShowLabel: false,
            }}
         >
            <Tab.Screen name='Test' component={Test}/>
            </Tab.Navigator>
    );
};
