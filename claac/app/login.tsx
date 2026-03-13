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
        <Pressable style = {styles.loginButton}
          onPress = {() => {
            console.log("Login button pressed");
            // login logic here later
          }}>
          <Text style = {styles.loginButtonText}>Login</Text>
        </Pressable>

      {/* Back Button */}
      <Pressable style = {styles.loginButton}
        onPress = {() => {
          console.log("Back button pressed");
          router.back();
        }}>
        <Text style = {styles.loginButtonText}>Back</Text>
      </Pressable>
    </View>

    
  </View>

  );
}