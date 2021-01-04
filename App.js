// SplashScreen
//ou y la vache qui charge

//RestaurantsScreen
//ou y la carte de tout les restaurants

// RestaurantScreen
//ou fau qu'une carte

//MapScreen
//la map

//FavoritesScreen
// ce que j'enregistre

//LoginScreen
//ce connecter

//SignupScreen
// s'inscire

//tab explorer , favoris

import React from "react";
import { view } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// //est de restituer le contenu dans les limites de la zone de sécurité d'un appareil. Il n'est actuellement applicable qu'aux appareils iOS avec la version iOS 11 ou ultérieure.
// import { SafeAreaView } from "react-native-safe-area-context";

// asyncStorage me permet de stocker des données dans la mémoire du téléphone

// Icons
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
//import des containers screen
import SplashScreen from "./containers/SplashScreen";
import RestaurantsScreen from "./containers/RestaurantsScreen";
import RestaurantScreen from "./containers/RestaurantScreen";
import MapScreen from "./containers/MapScreen";
import FavoritesScreen from "./containers/FavoritesScreen";

//import components
import Logo from "./components/Logo.js";

//Important pour que le code marche
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  // save or remove id in AsyncStorage & state

  // {
  //   /* tjr commencer comme ca si on veu une tab dedan */
  // }

  // {
  //   /* afficcher la tab  */
  // }

  // pareillle

  // {
  //   /* ellement de ma tab: explorer= restaurants , favoris=favoris  */
  // }

  //je ne touche pas a ca

  // {
  //   /* emporter le screen qui correspond */
  // }

  // {
  //   /* ajouter un stackscren pour ajouter une page a explorer  */
  // }

  // {
  //   /* tab sont  differente  et on a mis en haut les page qui Correspondent a la tab restaurant  */
  // }

  // We haven't finished checking for the token yet

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Explorer" options={{ header: () => null }}>
          {() => (
            <Tab.Navigator
              tabBarOptions={{
                activeTintColor: "red",
                inactiveTintColor: "grey",
              }}
            >
              <Tab.Screen
                name="explorer"
                options={{
                  tabBarLabel: "explorer",
                  tabBarIcon: ({}) => (
                    <AntDesign name="search1" size={24} color="black" />
                  ),
                }}
              >
                {() => (
                  <Stack.Navigator
                    screenOptions={{
                      headerShown: true,
                    }}
                  >
                    <Stack.Screen
                      name="restaurants"
                      options={{
                        headerTitle: () => <Logo size={"small"} />,
                      }}
                    >
                      {(props) => <RestaurantsScreen {...props} />}
                    </Stack.Screen>
                    <Stack.Screen
                      name="Restaurant"
                      options={{
                        headerTitle: () => <Logo size={"small"} />,
                      }}
                    >
                      {(props) => <RestaurantScreen {...props} />}
                    </Stack.Screen>
                  </Stack.Navigator>
                )}
              </Tab.Screen>
              <Tab.Screen
                name="Favoris"
                options={{
                  tabBarLabel: "Favoris",
                  tabBarIcon: ({ color, size }) => (
                    <Fontisto name="favorite" size={24} color="black" />
                  ),
                }}
              >
                {() => (
                  <Stack.Navigator screenOptions={{ headerShown: true }}>
                    <Stack.Screen
                      name="Favoris"
                      options={{
                        headerTitle: () => <Logo size={"small"} />,
                      }}
                    >
                      {(props) => <FavoritesScreen {...props} />}
                    </Stack.Screen>
                  </Stack.Navigator>
                )}
              </Tab.Screen>
            </Tab.Navigator>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
