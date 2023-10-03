import React from "react";
import { View, Text } from "react-native";
import { Button } from "@rneui/base";
import { styles } from "./ChangePass.styles";

export function ChangePass() {
  return (
    <View>
      <Button
        title="Cambiar contraseña"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
      />
    </View>
  );
}
