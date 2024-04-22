/* eslint-disable prettier/prettier */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export const MainBottomNavigation = () => {
    return (
        <Tab.Navigator
            //   initialRouteName='Home'
            screenOptions={{
                tabBarShowLabel: false,
            }}
         />
    );
};
