import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Find from './Find';
import ScTopProd from './ScTopProd';

const Drawer = createDrawerNavigator();

export default function ListProd({ navigation }) {
  return (
    <Drawer.Navigator screenOptions={{
      headerTitleAlign: 'center',
    }}>
      <Drawer.Screen name="Find" component={Find} />
      <Drawer.Screen name="TopProd" component={ScTopProd} />
    </Drawer.Navigator>
  );
}