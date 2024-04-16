import { Text, SafeAreaView, StyleSheet, View, Button, Pressable, ScrollView, Image } from 'react-native';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StaticData from './components/Data';
import ListBill from './components/Views/ListBill';
import formScreenBill from './components/Views/ScBill';
import formHome from './components/Views/Home';


const Stack = createNativeStackNavigator();
StaticData.setData();
export default function App() {
  const [system, setSystem] = useState('home');
  const login = (user, pass) => {
    if(user == 'Admin' && pass == '123'){
      setSystem('home')
    }
  }
  return (<View style={{flex: 1}}>
    {system == 'login' ? <Login onPress={login}/> : <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerTitleAlign: 'center',
        }}>
          <Stack.Screen name="Home" component={formHome} />
          <Stack.Screen name="ScreenBill" component={formScreenBill} />
          <Stack.Screen name="ListBill" component={ListBill} />
        </Stack.Navigator>
      </NavigationContainer>}
  </View>
  );
}

