import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Image } from "@rneui/base";

import { LoginScreen } from "../Cuenta/LoginScreen/LoginScreen";

export function IntroScreen() {
  const navigation = useNavigation();
  const [nav, setNav] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setNav(false);
    }, 5000);
    console.log(nav);
  }, []);

  return nav ? <Intro /> : <LoginScreen />;
}

function Intro() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../assets/brain.png")}
      />
      <Text style={styles.quote}>El mejor juego de memoria y aprendizaje</Text>
      <Text style={styles.team}>Inicia Sesión para comenzar a aprender</Text>
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
