import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { screen } from "../utils/screenName";

import { LoginScreen } from "../screens/Cuenta/LoginScreen/LoginScreen";
import { RegisterScreen } from "../screens/Cuenta/RegisterScreen/RegisterScreen";
import { UserInfo } from "../components/Auth/UserInfo/UserInfo";
import { AccountScreen } from "../screens/Cuenta/AccountScreen/AccountScreen";

export function StackCuenta() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={screen.cuenta.login} component={LoginScreen} />
      <Stack.Screen name={screen.cuenta.register} component={RegisterScreen} />
      <Stack.Screen name={screen.cuenta.info} component={UserInfo} />
    </Stack.Navigator>
  );
}
