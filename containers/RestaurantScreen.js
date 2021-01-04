import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import MapView from "react-native-maps";

export default function RestaurantScreen({ route }) {
  // route sert a recuperer les elements que l'on envoyé de la page précedente
  // faire un console log des éléments recuperer (route.params.le nom que tu as mis dans l'objet de la page précédente...  ....)
  console.log(route.params.restaurant);

  const restaurant = route.params.restaurant;
  //Destructuring
  console.log(restaurant);
  return (
    <View style={styles.container}>
      <Image
        style={styles.img3}
        source={{
          uri: restaurant.thumbnail,
        }}
      />
      <Text>{restaurant.name}</Text>
      <Text>{restaurant.rating}</Text>
      <Text>{restaurant.description}</Text>

      <MapView
        // La MapView doit obligatoirement avoir des dimensions
        //pas besoin de flex sinon marche pas
        style={styles.map}
        initialRegion={{
          latitude: 48.856614,
          longitude: 2.3522219,
          latitudeDelta: 0.2,
          longitudeDelta: 0.2,
        }}
        showsUserLocation={true}
        //montré le point bleu "t'es la "
      >
        <MapView.Marker
          coordinate={{
            latitude: restaurant.location[1],
            longitude: restaurant.location[0],
          }}
          title={restaurant.title}
          description={restaurant.description}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "purple",
  },
  img3: {
    marginTop: 50,
    marginLeft: 15,
    width: 250,
    height: 250,
  },
  map: {
    width: 400,
    height: 300,
  },
});
