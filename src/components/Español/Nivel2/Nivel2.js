import React, { useState } from "react";
import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { styles } from "./Nivel2.styles";

export function Nivel2(props) {
  const insets = useSafeAreaInsets();
  const { route } = props;

  const [nivel, setNivel] = useState(route.params.params.nivel);
  console.log(route.params.params.puntosVocales - 1);

  return (
    <View
      style={{
        flex: 1,

        backgroundColor: "#1f160f",

        // Paddings to handle safe area
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>2. Tildes</Text>
        <Text style={styles.nivel}>{nivel} de 5</Text>
      </View>
    </View>
  );
}
