import { Image, StyleSheet, Text, View } from "react-native";
import AACBoard from "../components/AACBoard";

const styles = StyleSheet.create({
  columns: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  propellerhat: {
    width: 100,
    height: 100,
  },
});


export default function Index() {
  return (
    <View
      style={styles.columns}
    >
      <Text>Hi! Welcome to Co-Location Aware AAC (CLAAC)!</Text>
      <Image
        style={styles.propellerhat}
        source= {require("../assets/images/propellerhat.png")}
      />
      <AACBoard />
    </View>
  );
}
