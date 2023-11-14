import React from "react";
import { View, Text } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Icon } from "@rneui/base";

import { StackJuego } from "./StackJuego";
import { StackCuentaUsuario } from "./StackCuentaUsuario";
import { screen } from "../utils/screenName";

const Tab = createMaterialBottomTabNavigator();

export function AppNavigationLogged() {
  return (
    <Tab.Navigator
      barStyle={{ height: 0 }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
      })}
    >
      <Tab.Screen name={screen.juego.tab} component={StackJuego} />
    </Tab.Navigator>
  );
}

function screenOptions(route, color, size) {
  let iconName;
  if (route.name === screen.juego.tab) {
    iconName = "home-outline";
  }

  return (
    <Icon type="material-community" name={iconName} color={color} size={size} />
  );
}
