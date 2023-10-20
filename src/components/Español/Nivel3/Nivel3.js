import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Button } from "@rneui/base";
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
  const [userWords, setUserWords] = useState();
  const [loop, setLoop] = useState(true);
  const [disabled, setDisabled] = useState(false);

  setTimeout(() => {
    setLoop(false);
  }, 6000);

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
          loop={loop}
          data={rightWords}
          renderItem={({ item }) => <Text style={styles.words}>{item}</Text>}
        />
      </View>
      {loop ? (
        ""
      ) : (
        <View
          style={{
            height: 500,
            marginHorizontal: "auto",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <Button
            containerStyle={{
              width: 100,
              height: 150,
              flexGrow: 10,
              margin: 10,
            }}
            disabled={disabled}
            title="El gato"
            buttonStyle={{ backgroundColor: "#926247" }}
            onPress={() => setUserWords("El gato")}
          />

          <Button
            containerStyle={{
              width: 100,
              height: 150,
              flexGrow: 10,
              margin: 10,
            }}
            buttonStyle={{ backgroundColor: "#926247" }}
          >
            Azucar
          </Button>
          <Button
            containerStyle={{
              width: 100,
              height: 150,
              flexGrow: 10,
              margin: 10,
            }}
            disabled={disabled}
            title="Camión"
            buttonStyle={{ backgroundColor: "#926247" }}
            onPress={() => setUserWords("Camión")}
          />

          <Button
            containerStyle={{
              width: 100,
              height: 150,
              flexGrow: 10,
              margin: 10,
            }}
            buttonStyle={{ backgroundColor: "#926247" }}
          >
            Avion
          </Button>
          <Button
            containerStyle={{
              width: 100,
              height: 150,
              flexGrow: 10,
              margin: 10,
            }}
            disabled={disabled}
            title="Árbol"
            buttonStyle={{ backgroundColor: "#926247" }}
            onPress={() => setUserWords("Árbol")}
          />
          <Button
            containerStyle={{
              width: 100,
              height: 150,
              flexGrow: 10,
              margin: 10,
            }}
            buttonStyle={{ backgroundColor: "#926247" }}
          >
            Camion
          </Button>
          <Button
            containerStyle={{
              width: 100,
              height: 150,
              flexGrow: 10,
              margin: 10,
            }}
            disabled={disabled}
            title="Limón"
            buttonStyle={{ backgroundColor: "#926247" }}
            onPress={() => setUserWords("Limón")}
          />
          <Button
            containerStyle={{
              width: 100,
              height: 150,
              flexGrow: 10,
              margin: 10,
            }}
            buttonStyle={{ backgroundColor: "#926247" }}
          >
            Arbol
          </Button>
          <Button
            containerStyle={{
              width: 100,
              height: 150,
              flexGrow: 10,
              margin: 10,
            }}
            disabled={disabled}
            title="Azúcar"
            buttonStyle={{ backgroundColor: "#926247" }}
            onPress={() => setUserWords("Azúcar")}
          />
        </View>
      )}
    </View>
  );
}
