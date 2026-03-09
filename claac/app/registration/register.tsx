import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import { styles } from "../styles/homePageStyle";
import { Button } from "@react-navigation/elements";
import { router, useRouter } from "expo-router";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ChildRegisterScreen from "./childReg";

const Tab = createMaterialTopTabNavigator();

export default function RegisterScreen() {
  return (
    <Tab.Navigator>

      <Tab.Screen 
        name="Adult" 
        component={AdultRegisterScreen} 
      />

      <Tab.Screen 
        name="Child" 
        component={ChildRegisterScreen} 
      />

    </Tab.Navigator>
  );
}