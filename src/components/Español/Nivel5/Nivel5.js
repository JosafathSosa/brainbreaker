import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Button } from "@rneui/base";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "../Nivel5/Nivel5.styles";
import Carousel from "react-native-reanimated-carousel";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils/screenName";

export function Nivel5(props) {
  const navigation = useNavigation();
  const { route } = props;
  const insets = useSafeAreaInsets();
  const [nivel, setNivel] = useState(route.params.params.nivel);
  const [rightWords, setrightWords] = useState([
    "Grande",
    "Feliz",
    "Rápido",
    "Alto",
    "Encender",
  ]);
  const [words, setWords] = useState([
    "Amplio",
    "Alegre",
    "Veloz",
    "Elevado",
    "Activar",
  ]);
  const [userWords, setUserWords] = useState();
  const [loop, setLoop] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [inter, setInter] = useState(null);
  const [answerTime, setAnswerTime] = useState(10);
  const [totalPoints, setTotalPoints] = useState(
    route.params.params.puntos - 1
  );
  const [points, setPoints] = useState(0);

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

  const recompensas = () => {
    console.log("Hola");
  };

  useEffect(() => {
    console.log(totalPoints);
    const res = words.filter((word) => word != userWords);

    var i = points;
    setPoints(i + 1);
    setTotalPoints(points);

    if (words.length === 1) {
      setDisabled(true);
    }

    setWords(res);
  }, [userWords]);

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
        <Text style={styles.title}>5. Sinónimos</Text>
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
        )) || (
          <View>
            <Text style={styles.timeout}>Se acabo el tiempo</Text>
            <Text style={styles.timeout2}>Obtuviste: {points - 1} puntos</Text>
          </View>
        )}

        {disabled ? (
          <Text style={{ color: "white", fontSize: 20 }}>
            Bien hecho{" "}
            <Text style={{ color: "#926247" }} onPress={() => recompensas()}>
              Siguiente nivel
            </Text>
          </Text>
        ) : (
          <Carousel
            width={300}
            height={150}
            autoPlay={true}
            loop={loop}
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
            title="Amplio"
            buttonStyle={{ backgroundColor: "#926247" }}
            onPress={() => setUserWords("Amplio")}
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
            Pesado
          </Button>

          <Button
            containerStyle={{
              width: 100,
              height: 150,
              flexGrow: 10,
              margin: 10,
            }}
            buttonStyle={{ backgroundColor: "#926247" }}
          >
            Satisfecho
          </Button>

          <Button
            containerStyle={{
              width: 100,
              height: 150,
              flexGrow: 10,
              margin: 10,
            }}
            disabled={disabled}
            title="Alegre"
            buttonStyle={{ backgroundColor: "#926247" }}
            onPress={() => setUserWords("Alegre")}
          />

          <Button
            containerStyle={{
              width: 100,
              height: 150,
              flexGrow: 10,
              margin: 10,
            }}
            disabled={disabled}
            title="Veloz"
            buttonStyle={{ backgroundColor: "#926247" }}
            onPress={() => setUserWords("Veloz")}
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
            Agil
          </Button>
          <Button
            containerStyle={{
              width: 100,
              height: 150,
              flexGrow: 10,
              margin: 10,
            }}
            disabled={disabled}
            title="Elevado"
            buttonStyle={{ backgroundColor: "#926247" }}
            onPress={() => setUserWords("Elevado")}
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
            Gigante
          </Button>
          <Button
            containerStyle={{
              width: 100,
              height: 150,
              flexGrow: 10,
              margin: 10,
            }}
            disabled={disabled}
            title="Activar"
            buttonStyle={{ backgroundColor: "#926247" }}
            onPress={() => setUserWords("Activar")}
          />
        </View>
      )}
    </View>
  );
}
