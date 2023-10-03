import React from "react";
import { View, Text } from "react-native";
import { Button } from "@rneui/base";

import { styles } from "./ChangeName.styles";

export function ChangeName() {
  return (
    <View>
      <Button
        title="Cambiar nombre"
        containerStyle={styles.changeName}
        buttonStyle={styles.btnChangeName}
      />
    </View>
  );
}
