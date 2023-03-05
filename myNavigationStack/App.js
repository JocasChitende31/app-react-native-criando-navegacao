import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import AppContacts from './src/pages/appContacts/'
import Contacts from './src/pages/Contacts/';
import Home from "./src/pages/Home/";
import Information from './src/pages/Information';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator style={{backgroundColor: 'blue'}}>
      <Tab.Screen name="AppContacts" component={AppContacts} />
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Contacts" component={Contacts} />
    </Tab.Navigator>
  )
}



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="AppContacts" component={Tabs} />
        <Stack.Screen name="Information" component={Information} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



