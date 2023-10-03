import React, { useEffect, useState } from "react";
import Toast from "react-native-toast-message";
import { View, StyleSheet, Text, LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Image } from "@rneui/base";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { AppNavigation } from "./src/navigation/AppNavigation";

import { initFirebase } from "./src/utils/firebase";

LogBox.ignoreAllLogs();

export default function App() {
  const [hasLogged, setHasLogged] = useState(null);
  const [nav, setNav] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setHasLogged(user ? true : false);
    });

    if (hasLogged === true) {
      setNav(false);
    } else {
      setTimeout(() => {
        setNav(false);
      }, 5000);
    }
  }, []);

  return nav ? (
    <Intro />
  ) : (
    <>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
      <Toast />
    </>
  );
}

function Intro() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/brain.png")} />
      <Text style={styles.quote}>El mejor juego de memoria y aprendizaje</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#702901",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 30,
  },

  quote: {
    marginHorizontal: 50,
    textAlign: "center",
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },

  team: {
    color: "white",
    marginTop: 48,
    fontSize: 14,
    fontWeight: "bold",
  },
});
