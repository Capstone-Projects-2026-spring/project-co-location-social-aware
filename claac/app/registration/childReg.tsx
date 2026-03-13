import React from "react";
import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";
import { styles } from "../../styles/homePageStyle";

export default function ChildRegisterScreen() {

  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>

      <Text style={{fontSize:24}}>
        Child Account Creation
      </Text>

      <Text style={{marginTop:20}}>
        This page is under construction.
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => router.back()}
      >
        <Text style={styles.buttonText}>Back</Text>
      </Pressable>

    </View>
  );
}