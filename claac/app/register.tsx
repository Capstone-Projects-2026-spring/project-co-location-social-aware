import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import { styles } from "../styles/homePageStyle";
import { Button } from "@react-navigation/elements";
import { router, useRouter } from "expo-router";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

function AdultAccount() {
  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
      <Text>Adult Account Creation</Text>
    </View>
  );
}

function ChildAccount() {
  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
      <Text>Child Account Creation</Text>
    </View>
  );
}

export default function RegisterScreen() {
  return (
    <Tab.Navigator>

      <Tab.Screen 
        name="Adult" 
        component={AdultAccount} 
      />

      <Tab.Screen 
        name="Child" 
        component={ChildAccount} 
      />

    </Tab.Navigator>
  );
}