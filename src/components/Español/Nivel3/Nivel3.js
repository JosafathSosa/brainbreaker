import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "../Nivel3/Nivel3.styles";
import Carousel from "react-native-reanimated-carousel";

export function Nivel3(props) {
  const { route } = props;
  const insets = useSafeAreaInsets();
  const [nivel, setNivel] = useState(route.params.params.nivel);
  const [rightWords, setrightWords] = useState([
    "El gato esta comiendo",
    "El lunes veré a mi primo",
    "El negocio es de la esposa Juan",
    "El gerente prometió aumento",
    "Corrí un maraton",
  ]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#1f160f", // Paddings to handle safe area
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>3. Sujeto</Text>
        <Text style={styles.nivel}>{nivel} de 5</Text>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",

          height: 300,
        }}
      >
        <Carousel
          width={300}
          height={150}
          autoPlay={true}
          data={rightWords}
          renderItem={({ item }) => <Text style={styles.words}>{item}</Text>}
        />
      </View>
    </View>
  );
}
