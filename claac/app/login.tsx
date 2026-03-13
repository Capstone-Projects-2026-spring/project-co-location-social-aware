import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View, Image, StyleSheet, Pressable, TextInput } from "react-native";
import { styles } from "../styles/loginPageStyle";
import { Button } from "@react-navigation/elements";
import { router, useRouter } from "expo-router";

export default function LoginScreen() { // Must be 'export default'
  return (
    <View style = {styles.container}>
      <Text style = {styles.title}>Login</Text>

      {/* Email Input */}
      <TextInput style = {styles.input} placeholder="Email" />

      {/* Password Input */}
      <TextInput style = {styles.input} placeholder="Password" secureTextEntry />

      {/* Register Button */}
      <Pressable style = {styles.registerButton}
        onPress = {() => {
          console.log("Register button pressed");
          router.replace("/register");
        }}>
        <Text style = {styles.registerButtonText}>Don't have an Account? Register Here!</Text>
      </Pressable>

      {/* Login Button */}
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
                                router.replace("/registration/register");
                              }}>
                            <Text style={styles.buttonText}>Don't Have and Account? Register Here!!</Text>
                          </Pressable>
                      </View>
    </View>

    
  </View>

  );
}