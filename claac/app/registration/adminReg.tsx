import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AdminRegisterScreen() {

  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createAdmin = async () => {

    try {

      const response = await fetch("IPHERE:8000/api/register/", { //replace IPHERE with your IP, run server from backend folder using 'python manage.py runserver 0.0.0.0:8000'
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
      if (data.token) {
        await AsyncStorage.setItem("token", data.token);
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
        //onPress = {() => alert("Admin account creation button pressed.")}
      >
        <Text style={styles.buttonText}>Create Account</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    padding:20
  },
  title:{
    fontSize:24,
    marginBottom:30
  },
  input:{
    width:"90%",
    borderWidth:1,
    padding:12,
    marginBottom:15,
    borderRadius:6
  },
  button:{
    backgroundColor:"#007AFF",
    padding:15,
    borderRadius:6
  },
  buttonText:{
    color:"white",
    fontWeight:"bold"
  }
});