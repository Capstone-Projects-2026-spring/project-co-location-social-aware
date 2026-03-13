import React, { useState } from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import { router, useRouter } from "expo-router";
import { styles } from "../../styles/registerPageStyle";
import AsyncStorage from "@react-native-async-storage/async-storage/lib/typescript/AsyncStorage";

export default function ChildRegisterScreen() {
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const [guardian, setGuardian] = useState("");
  const router = useRouter();
  const createChild = async () => {

    try {

      const response = await fetch("http://127.0.0.1:8000/api/register/", { //run server from backend folder using 'python manage.py runserver'
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username,
          guardian: guardian, //create new parameter for guardian in backend and frontend
          password: password,
          role: "child"
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

      <Text style={styles.title}>Create Child Account</Text>

      <TextInput
        style={styles.input}
        placeholder="Child Name"
        onChangeText={setName}
      />
      <TextInput
        style={styles.input} //Create dropdown menu for guardian selection that searches thru registered admins in database
        placeholder="Set Guardian"
        secureTextEntry
        onChangeText={setGuardian}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
      />

      <Pressable
        style={styles.button}
        onPress={createChild}
      >
        <Text style={styles.buttonText}>Create Account</Text>
      </Pressable>

    </View>
  );
}
