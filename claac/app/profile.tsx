import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/ProfileStyle";

export default function Profile() {

  type User = {
    username: string;
    email: string;
    role: string;
  };

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {

    const token = await AsyncStorage.getItem("token");

    const response = await fetch("http://127.0.0.1:8000/api/profile/", {
      headers: {
        Authorization: `Token ${token}`
      }
    });

    const data = await response.json();
    setUser(data);
  };

  if (!user) return <Text>Loading...</Text>;

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.title}>Admin Dashboard</Text>
{/*USER INFO*/}
      <View>
        <Text style={styles.name}>Name: {user.username}</Text>
        <Text style={styles.role}>Role: {user.role}</Text>
        <Text style={styles.email}>Email: {user.email}</Text>
      </View>

{/* CHILD MANAGEMENT */}
      <Text style={styles.section}>Child Management</Text>
{/*These buttons should navigate to diff screens that will be later implemented*/}
      <TouchableOpacity style={styles.button} onPress={() => router.push("/editChildGoals")}>
        <Text style={styles.buttonText}>Edit Child Goals</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/editChildProfile")}>
        <Text style={styles.buttonText}>Edit Child Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/addStudent")}>
        <Text style={styles.buttonText}>Add Student Account</Text>
      </TouchableOpacity>

      {/* MONITORING */}
      <Text style={styles.section}>Monitoring</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>View Child Progress</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Activity Reports</Text>
      </TouchableOpacity>

      {/* ACCOUNT */}
      <Text style={styles.section}>Account</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.logout]}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}