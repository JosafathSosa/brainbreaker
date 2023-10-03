import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { styles } from "./LoginScreen.styles";
import { Image, Input, Button, Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { LoginForm } from "../../../components/Auth";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigationLogged } from "../../../navigation/AppNavigationLogged";
import { SafeAreaProvider } from "react-native-safe-area-context";

export function LoginScreen() {
  const [hasLogged, setHasLogged] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setHasLogged(user ? true : false);
    });
  }, []);

  return hasLogged ? (
    <SafeAreaProvider>
      <NavigationContainer independent={true}>
        <AppNavigationLogged />
      </NavigationContainer>
    </SafeAreaProvider>
  ) : (
    <LogIn />
  );
}

export function LogIn() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../../../assets/brain.png")}
          style={styles.image}
        />
      </View>
      <LoginForm />
    </View>
  );
}
