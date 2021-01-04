import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function FavoritesScreen() {
  //je ne dois pa ecrire que app il faut ecrire le nom du dossier
  return (
    <View style={styles.container}>
      <Text>favoris</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "purple",
  },
});
