import AACBoard from "@/components/AACBoard";
import React from "react";
import { View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  }
});

export default function Grid() {
  return (
    <View style={styles.container}>
        <AACBoard />
    </View>
  );
}