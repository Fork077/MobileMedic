import React, { useState } from 'react';
import  Onboard from './components/Onboard';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './app/screen/Home';
import Health from './app/screen/Health';
import FirstAid from './app/screen/FirstAid';
import Emergency from './app/screen/Emergency';
import SafeAreaDroid from './components/SafeAreaDroid';

const Stack = createNativeStackNavigator();

const App = () => {
return (
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Welcome" component={Onboard} />
        <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
        <Stack.Screen options={{headerShown: false}} name='Health' component={Health}/>
        <Stack.Screen options={{headerShown: false}} name='FirstAid' component={FirstAid}/>
        <Stack.Screen options={{headerShown: false}} name='Emergency' component={Emergency}/>
      </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App;