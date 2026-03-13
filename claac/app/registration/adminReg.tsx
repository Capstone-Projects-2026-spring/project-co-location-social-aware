import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { styles } from "../../styles/registerPageStyle";

export default function AdminRegisterScreen() {

  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const createAdmin = async () => {

    try {

      const response = await fetch("http://127.0.0.1:8000/api/register/", { //run server from backend folder using 'python manage.py runserver'
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
          role: "admin"
        })
      });

      const data = await response.json();
      console.log("SERVER RESPONSE:", data);
      if (data.token) {
        await AsyncStorage.setItem("token", data.token);
        router.replace("/profile");
        console.log("Admin created:", data);
      } else {
        console.log("Registration error:", data);
      }
    } catch (error) {
      console.error("Error creating admin:", error);
    } 

  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Create Guardian Account</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
      />

      <Pressable
        style={styles.button}
        onPress={createAdmin}
      >
        <Text style={styles.buttonText}>Create Account</Text>
      </Pressable>

    </View>
  );
}