import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Button } from "@rneui/base";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "../Nivel3/Nivel3.styles";
import Carousel from "react-native-reanimated-carousel";
import {useNavigation} from "@react-navigation/native"
import {screen} from "../../../utils/screenName"

export function Nivel3(props) {
  const navigation = useNavigation()
  const { route } = props;
  const insets = useSafeAreaInsets();
  const [nivel, setNivel] = useState(route.params.params.nivel);
  const [rightWords, setrightWords] = useState([
    "El gato esta comiendo",
    "El lunes veré a mi primo",
    "El negocio es de la esposa de Juan",
    "El gerente prometió aumento",
    "Corrí un maraton",
  ]);
  const [words, setWords] = useState([
    "El gato",
    "Mi primo",
    "Esposa de Juan",
    "El gerente",
    "Corrí",
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

  goToLevel4 = () => {
    navigation.navigate(screen.juego.nivel4)
  };

  useEffect(() => {
    console.log(totalPoints);
    const res = words.filter((word) => word != userWords);

    var i = points;
    setPoints(i + 1);

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
            <Text style={{ color: "#926247" }} onPress={() => goToLevel4()}>
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
            El lunes
          </Button>
          <Button
            containerStyle={{
              width: 100,
              height: 150,
              flexGrow: 10,
              margin: 10,
            }}
            disabled={disabled}
            title="Mi primo"
            buttonStyle={{ backgroundColor: "#926247" }}
            onPress={() => setUserWords("Mi primo")}
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
            El negocio
          </Button>
          <Button
            containerStyle={{
              width: 100,
              height: 150,
              flexGrow: 10,
              margin: 10,
            }}
            disabled={disabled}
            title="Esposa de Juan"
            buttonStyle={{ backgroundColor: "#926247" }}
            onPress={() => setUserWords("Esposa de Juan")}
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
            Comiendo
          </Button>
          <Button
            containerStyle={{
              width: 100,
              height: 150,
              flexGrow: 10,
              margin: 10,
            }}
            disabled={disabled}
            title="El gerente"
            buttonStyle={{ backgroundColor: "#926247" }}
            onPress={() => setUserWords("El gerente")}
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
            Maraton
          </Button>
          <Button
            containerStyle={{
              width: 100,
              height: 150,
              flexGrow: 10,
              margin: 10,
            }}
            disabled={disabled}
            title="Corrí"
            buttonStyle={{ backgroundColor: "#926247" }}
            onPress={() => setUserWords("Corrí")}
          />
        </View>
      )}
    </View>
  );
}
