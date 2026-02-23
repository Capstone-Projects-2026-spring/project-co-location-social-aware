import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View, Image, StyleSheet } from "react-native";
import GridDisplayScreen from "./gridDisplay";

const bottomTab = createBottomTabNavigator();

const styles = StyleSheet.create({
  columns: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  propellerhat: {
    width: 100,
    height: 100,
  },
  navtab: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    tintColor: "#000000",
    width: 50,
    height: 50,
  },
});

export function HomeScreen() {
  return (
    <View style={styles.columns}>
      <Text>Hi! Welcome to Co-Location Aware AAC (CLAAC)!</Text>
      <Image
        style={styles.propellerhat}
        source={require("../../assets/images/propellerhat.png")}
      />
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
