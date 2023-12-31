import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Registeruser from './users/register';
import { Creator } from './appcontext';
import { useState } from 'react';

export default function App() {
console.log(process.env.EXPO_PUBLIC_URL)
const Stack =createStackNavigator();
const [state,setState]=useState("");
  return (
<Creator.Provider value={{state,setState}} >
<NavigationContainer>
      <Stack.Navigator initialRouteName='Register'>
<Stack.Screen component={Registeruser} name='Register'/>

</Stack.Navigator>
    </NavigationContainer>
    </Creator.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
