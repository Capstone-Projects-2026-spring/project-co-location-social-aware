import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import { styles } from "../styles/homePageStyle";
import { Button } from "@react-navigation/elements";
import { router, useRouter } from "expo-router";

export default function LoginScreen() { // Must be 'export default'
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login Screen</Text>
      <View style={styles.buttonContainer}>
              <Pressable style={styles.button}
                onPress={() => {
                  console.log("Login Back button pressed");
                  router.back();
                }}>
              <Text style={styles.buttonText}>Back</Text>
            </Pressable>
        </View>
        <View style={styles.buttonContainer}>
                            <Pressable style={styles.button}
                              onPress={() => {
                                console.log("Login Register button pressed");
                                router.replace("/register");
                              }}>
                            <Text style={styles.buttonText}>Don't Have and Account? Register Here!!</Text>
                          </Pressable>
                      </View>
    </View>
    
  );
}