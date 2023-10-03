import React from "react";
import { View, Text } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { screen } from "../utils/screenName";

import { IntroScreen } from "../screens/intro/IntroScreen";
import { LoginScreen } from "../screens/Cuenta/LoginScreen/LoginScreen";
import { RegisterScreen } from "../screens/Cuenta/RegisterScreen/RegisterScreen";

import { createStackNavigator } from "@react-navigation/stack";

import { StackCuenta } from "../navigation/StackCuenta";
import { StackJuego } from "../navigation/StackJuego";
import { Icon } from "@rneui/base";

const Stack = createStackNavigator();

export function AppNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={screen.cuenta.tab} component={StackCuenta} />
      <Stack.Screen name={screen.juego.tab} component={StackJuego} />
    </Stack.Navigator>
  );
}
