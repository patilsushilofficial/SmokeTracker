/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from './utils';
// import QuoteByAuthorScreen from '@/Containers/QuoteByAuthor/QuoteByAuthorScreen';
import {MainBottomNavigation} from './MainBottomNavigation';
import Test from '../components/Test';

const Stack = createStackNavigator();

const ApplicationNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      {/* <MainBottomNavigation /> */}
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={'Test'} component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ApplicationNavigator;