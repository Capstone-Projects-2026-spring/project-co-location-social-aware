import AACBoard from "@/components/AACBoard";
import PreferredWords from "@/components/PreferredWords";
import React, { useState, useEffect } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default function Grid() {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);

  // just for proof of concept right now
  // obviously we will change this once auth and profile management is implemented
  const userId = 1;

  useEffect(() => {
    fetchPreferredWords();
  }, []);

  const fetchPreferredWords = async () => {
    try {
      console.log("Fetching preferred words for user:", userId);
      const response = await fetch(`http://localhost:8000/api/users/${userId}/preferred-words/`);
      const data = await response.json();
      setWords(data.preferred_words);
      console.log("Preferred words fetched:", data.preferred_words);
    } catch (error) {
      console.error("Error fetching preferred words:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <AACBoard/>
      <PreferredWords words={words} />
    </View>
  );
}