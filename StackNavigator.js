import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import StatScreen from './screens/StatScreen';
import ScoreScreen from './screens/ScoreScreen';
import AboutScreen from './screens/AboutScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="About" component={AboutScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Score" component={ScoreScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Stat" component={StatScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})