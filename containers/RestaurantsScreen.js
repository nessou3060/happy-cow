import React, { useEffect, useState } from "react";
//usestate Enregistre les information
//useEffect a afficher
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import SplashScreen from "./SplashScreen";
import { useNavigation } from "@react-navigation/native";

//export defaut
//mettre navigation si on veu changer de page
function RestaurantsScreen({ navigation }) {
  //initialiser mon state
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //restaurants= tout mes restaurants
  //setresto= c la fonction qui permet d'enregistre les   restaurant
  //setresto sert a changer le nom
  //isloading sert a dire si la page charge ou non quand c'est true c'est pas charger et quand c false ca charge

  // console.log(restaurants);
  const GetRestaurants = async () => {
    try {
      const response = await axios.get(
        "https://res.cloudinary.com/lereacteur-apollo/raw/upload/v1575242111/10w-full-stack/Scraping/restaurants.json"
      );
      // console.log(response.data);
      //son genralement  dans data
      setRestaurants(response.data);
      //doit Enregistre les restaurants ici avant le catch

      setIsLoading(false);
      //c'est fini de charger (en cours de chargement= loading)
    } catch (error) {}
  };

  //il doit etre placer en desoous du axios
  useEffect(() => {
    GetRestaurants();
  }, []);

  return isLoading ? (
    //sert a afficher une photo avant
    //besoin d'une truner = if ? et else:
    <SplashScreen></SplashScreen>
  ) : (
    <View style={styles.container}>
      {/* //c'est les boucle  */}
      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.placeId}
        //sert a voir un Identifiant unique en gros id de cheauqe article

        renderItem={({ item }) => {
          //return obligatoire
          return (
            // un bouton obliger ppour changer de page
            <TouchableOpacity
              onPress={() => {
                // navigate ca va servir à changer de page, et ce quil ya dans les {} ca sert a envoyer des éléments dans l'autre page
                navigation.navigate("Restaurant", { restaurant: item });
              }}
            >
              <View style={styles.tete}>
                <Image
                  style={styles.img2}
                  source={{
                    uri: item.thumbnail,
                  }}
                />
                <Text>{item.name}</Text>
                {/* etoile */}
                <Text>{item.rating}</Text>

                {/* numberoflines sert a definire le nombre de ligne si le texte est trop long */}
                <Text numberOfLines={2}>{item.description}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

export default RestaurantsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "purple",
    flex: 1,
  },
  img2: {
    marginTop: 30,
    width: 150,
    height: 150,
  },
  tete: {
    flex: 1,
  },
});
