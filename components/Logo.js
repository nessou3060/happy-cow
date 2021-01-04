import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

import Logo1 from "../assets/logo2.png";

export default function Logo() {
  return (
    // <SafeAreaView>
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/logo2.png")} />
    </View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple",
  },
  image: {
    flex: 1,
    width: 450,
  },
});
