import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Logo from "../assets/logo.jpg";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/logo.jpg")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "purple",
  },
  image: {
    flex: 1,
    width: 450,
  },
});
