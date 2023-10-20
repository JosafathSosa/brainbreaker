import React, { useEffect, useState } from "react";
import { View, Text, FlatListComponent } from "react-native";
import { Nivel1 } from "../../../components/Español/Nivel1/Nivel1";

import { useSafeAreaInsets } from "react-native-safe-area-context";

export function Español() {
  const insets = useSafeAreaInsets();
  const [cont, setCont] = useState(10);
  const [nivel1, setNivel1] = useState(false);
  const [frases, setFrases] = useState([
    "Las vocales son las letras especiales del alfabeto: Puedes notar que cuando dices a, e, i, o, y u, tu boca está abierta y no toca ninguna otra parte de tu boca. ¡Eso las hace únicas!",
    "El sujeto de una oración es la persona o cosa de la que se habla",
    "El predicado es la parte de la oración que dice algo sobre alguien o algo",
    "Una tilde es como un sombrero pequeñito que algunas palabras llevan en la cabeza. Ayuda a las palabras a sonar de la manera correcta",
    "Los sinónimos son palabras que significan casi lo mismo, como si fueran amigos. Un sinónimo de feliz sería contento",
    "Los antónimos son palabras que son como opuestos, como si fueran contrarios o enemigos. Un antónimo de feliz sería triste",
  ]);
  const [random, setRandom] = useState();

  useEffect(() => {
    var x = Math.floor(Math.random() * frases.length);
    setRandom(x);

    var i = cont;
    var inter = setInterval(() => {
      i = i - 1;
      setCont(i);
      if (i === 0) {
        clearInterval(inter);
        setNivel1(true);
      }
    }, 1000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#1f160f",
        // Paddings to handle safe area
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      {nivel1 ? (
        <Nivel1 nivel={1} />
      ) : (
        <View style={{ marginHorizontal: 50, alignItems: "center" }}>
          <View style={{ marginBottom: 100 }}>
            <Text
              style={{
                color: "red",
                fontSize: 30,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              ¿Sabias que?
            </Text>
            <Text
              style={{
                color: "red",
                fontSize: 20,
                textAlign: "center",
                marginTop: 30,
                letterSpacing: 1,
              }}
            >
              {frases[random]}
            </Text>
          </View>
          <Text style={{ color: "red", marginBottom: 30, fontSize: 50 }}>
            {cont}
          </Text>
          <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>
            ¡Preparate para jugar! En base a las imagenes elige las 5 de todas
            las posibles
          </Text>
        </View>
      )}
    </View>
  );
}
