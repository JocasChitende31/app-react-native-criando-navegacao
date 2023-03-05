// import 'react-native-gesture-handler';
import  React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Contacts from "./src/pages/Contacts/";
import Information from "./src/pages/Information/";

const Drawer = createDrawerNavigator();

export default function App(){
  return(
    <NavigationContainer>
    <Drawer.Navigator initialRouteName='Contacts'>
      <Drawer.Screen name="Contacts" component={Contacts}/>
      <Drawer.Screen name="Information" component={Information}/>
    </Drawer.Navigator>
  </NavigationContainer>
  )
}
