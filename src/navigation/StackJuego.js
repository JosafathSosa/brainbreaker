import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

//Pantallas
import { Menu } from "../screens/Juego/Menu/Menu";
import { AccountScreen } from "../screens/Cuenta/AccountScreen/AccountScreen";
//

import { screen } from "../utils/screenName";
import { Icon, color } from "@rneui/base";

const Stack = createStackNavigator();

export function StackJuego() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.juego.juego}
        component={Menu}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={screen.cuenta.account}
        component={AccountScreen}
        options={{
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: "#926247" },
          headerTintColor: "white",
        }}
      />
    </Stack.Navigator>
  );
}
