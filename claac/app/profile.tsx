import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

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
    <View>
      <Text>Username: {user.username}</Text>
      <Text>Email: {user.email}</Text>
      <Text>Role: {user.role}</Text>
    </View>
  );
}