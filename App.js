import { Text, SafeAreaView, StyleSheet, View, Button, Pressable, ScrollView, Image } from 'react-native';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Products from './components/Products';
import Shops from './components/Shops';
import Bill from './components/Bill';
import ProductsBill from './components/ProductsBill';
import StaticData from './components/Data';
import Home from './components/Views/Home';
import Add from './components/Views/Add';
import Find from './components/Views/Find';
import ListProd from './components/Views/ListProd';
import ListBill from './components/Views/ListBill';
import ScBill from './components/Views/ScBill';
import ProdDetail from './components/Views/ProdDetail';
import Login from './components/Views/Login';
import ImportP from './components/Views/Import';

const Stack = createNativeStackNavigator();
StaticData.setData();
export default function App() {
  const [system, setSystem] = useState('login');
  const login = (user, pass) => {
    if(user == 'Admin' && pass == '123'){
      setSystem('home')
    }else{
      alert('Sai Thông Tin Đăng Nhập!')
    }
  }
  return (<View style={{flex: 1}}>
    {system == 'home' ? <Login onPress={login}/> : <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerTitleAlign: 'center',
        }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Add" component={Add} />
          <Stack.Screen name="ListProd" component={ListProd} />
          <Stack.Screen name="Import" component={ImportP} />
          <Stack.Screen name="ListBill" component={ListBill} />
          <Stack.Screen name="ScreenBill" component={ScBill} />
          <Stack.Screen name="Details" component={ProdDetail} />
        </Stack.Navigator>
      </NavigationContainer>}
  </View>
  );
}

