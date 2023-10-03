import React from "react";
import { View } from "react-native";
import { styles } from "./RegisterScreen.styles";
import { Image } from "@rneui/base";

import { RegisterForm } from "../../../components/Auth";

export function RegisterScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../../../assets/brain.png")}
          style={styles.image}
        />
      </View>
      <RegisterForm />
    </View>
  );
}
