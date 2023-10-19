import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Button } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Carousel from "react-native-reanimated-carousel";

import { screen } from "../../../utils/screenName";
import { styles } from "./Nivel2.styles";

export function Nivel2(props) {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const { route } = props;

  const [rightWords, setrightWords] = useState([
    "Camión",
    "Árbol",
    "Azúcar",
    "Limón",
    "Avión",
  ]);
  const [userWords, setUserWords] = useState();
  const [loop, setLoop] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [answerTime, setAnswerTime] = useState(10);
  const [inter, setInter] = useState(null);
  const [points, setPoints] = useState(route.params.params.puntosVocales - 1);

  setTimeout(() => {
    setLoop(false);
    if (loop) {
      var i = answerTime;
      setInter(
        setInterval(() => {
          i = i - 1;
          setAnswerTime(i);
          if (i == 0) {
            clearInterval(inter);
            setDisabled(true);
          }
        }, 1000)
      );
    }
  }, 6000);

  const [nivel, setNivel] = useState(route.params.params.nivel);

  useEffect(() => {
    const res = rightWords.filter((letra) => letra != userWords);
    setrightWords(res);

    var i = points;
    setPoints(i + 1);
    console.log(points);
    if (rightWords.length === 1) {
      setDisabled(true);
    }
  }, [userWords]);

  const goToLevel3 = () => {
    navigation.navigate(screen.juego.nivel3, {
      params: { nivel: nivel + 1, puntosVocales: points },
    });
  };

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

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",

          height: 300,
        }}
      >
        {(disabled != true && (
          <Text style={styles.timeout}>Tiempo: {answerTime}</Text>
        )) || <Text style={styles.timeout}>Se acabo el tiempo</Text>}

        {disabled ? (
          <Text style={{ color: "white", fontSize: 20 }}>
            ¡Bien hecho!{" "}
            <Text style={{ color: "#926247" }} onPress={() => goToLevel3()}>
              Siguiente nivel
            </Text>
          </Text>
        ) : (
          <Carousel
            width={200}
            height={150}
            loop={loop}
            autoPlay={true}
            data={rightWords}
            renderItem={({ item }) => <Text style={styles.words}>{item}</Text>}
          />
        )}
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
            title="Avión"
            buttonStyle={{ backgroundColor: "#926247" }}
            onPress={() => setUserWords("Avión")}
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
