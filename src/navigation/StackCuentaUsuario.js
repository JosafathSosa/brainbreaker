import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { screen } from "../utils/screenName";
import { AccountScreen } from "../screens/Cuenta/AccountScreen/AccountScreen";

const Stack = createStackNavigator();
export function StackCuentaUsuario() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={screen.cuenta.account} component={AccountScreen} />
    </Stack.Navigator>
  );
}
