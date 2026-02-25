import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import GridDisplayScreen from "./gridDisplay";
import { styles } from "../../styles/homePageStyle";
import { Button } from "@react-navigation/elements";
import { router, useRouter } from "expo-router";

const bottomTab = createBottomTabNavigator();

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style = {styles.title}>Welcome to Co-Location Aware AAC (CLAAC)!</Text>
      <Image
        style={styles.logo}
        source={require("../../assets/images/propellerhat.png")}
      />
      <Text style = {styles.subtitle}>CLAAC is an AAC grid app that uses BLE beacons to gain location information
         about a user. Using this location information, the AAC keyboard will connect the user to other users in the area. With this, 
         AAC device will suggest interests of the users around your location. This will in turn encourage users to socialize, engage in
          new interests, and possibly facilitate activities that is interesting to other users and themself.</Text>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}
          onPress={() => {
            console.log("Login button pressed");
            router.push("/login");
          }}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
      <Pressable style={styles.button}
        onPress={() => {
          console.log("Register button pressed");
          router.push("/register");
        }}>
        <Text style={styles.buttonText}>Register</Text>
      </Pressable>
      </View>
    </View>
  );
}

export default function Tabs() {
  return (
    <bottomTab.Navigator>
      <bottomTab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../../assets/images/homeIcon.png")}
              style={styles.navtab}
            />
          ),
        }}
      />
      <bottomTab.Screen 
        name="Grid Display" 
        component={GridDisplayScreen} 
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../../assets/images/gridIcon.png")}
              style={styles.navtab}
            />
          ),
        }}
      />
    </bottomTab.Navigator>
  );
}
