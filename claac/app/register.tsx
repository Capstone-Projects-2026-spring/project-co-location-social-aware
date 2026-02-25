import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import { styles } from "../styles/homePageStyle";
import { Button } from "@react-navigation/elements";
import { router, useRouter } from "expo-router";

export default function RegisterScreen() { // Must be 'export default'
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Register Screen</Text>
      <View style={styles.buttonContainer}>
                    <Pressable style={styles.button}
                      onPress={() => {
                        console.log("Login Back button pressed");
                        router.back();
                      }}>
                    <Text style={styles.buttonText}>Back to Homepage</Text>
                  </Pressable>
              </View>
    </View>
  );
}