import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Image, Button } from "@rneui/base";
import { styles } from "./Nivel1.styles";

import { screen } from "../../../utils/screenName";

import Carousel from "react-native-reanimated-carousel";

export function Nivel1(props) {
  const navigate = useNavigation();
  const { nivel } = props;

  const [vocales, setVocales] = useState([
    require("../../../../assets/vocales/vocalA.png"),
    require("../../../../assets/vocales/vocalB.png"),
    require("../../../../assets/vocales/vocalC.png"),
    require("../../../../assets/vocales/vocalD.png"),
    require("../../../../assets/vocales/vocalE.png"),
  ]);

  const [loop, setLoop] = useState(true);
  const [rightWords, setRightWords] = useState(["a", "e", "i", "o", "u"]);
  const [userWords, setUserWords] = useState();
  const [disabled, setDisabled] = useState(false);
  const [answerTime, setAnswerTime] = useState(10);

  setTimeout(() => {
    setLoop(false);
    if (loop) {
      var i = answerTime;
      var inter = setInterval(() => {
        i = i - 1;
        setAnswerTime(i);
        if (i == 0) {
          clearInterval(inter);
        }
      }, 1000);
    }
  }, 5000);

  //Este hook de efecto se hace cada vez que el usuario presiona una letra que esta en el resultado
  useEffect(() => {
    //Aqui se cual letra esta cambiando
    const res = rightWords.filter((letra) => letra != userWords);
    setRightWords(res);
    //Si el contador llega a si que son las letras buenas, los botones se desabilitan
    if (rightWords.length === 1) {
      setDisabled(true);
    }
  }, [userWords]);

  const goLevel2 = () => {
    navigate.navigate(screen.juego.nivel2, { params: { nivel: nivel + 1 } });
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>1. Vocales</Text>
        <Text style={styles.nivel}>{nivel} de 5</Text>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",

          height: 300,
        }}
      >
        {(answerTime > 0 && (
          <Text style={styles.timeout}>Tiempo: {answerTime}</Text>
        )) || <Text style={styles.timeout}>Se acabo el tiempo</Text>}

        {disabled ? (
          <Text style={{ color: "white", fontSize: 20 }}>
            ¡Bien hecho! <Text onPress={() => goLevel2()}>Siguiente nivel</Text>
          </Text>
        ) : (
          <Carousel
            width={150}
            height={150}
            loop={loop}
            autoPlay={true}
            data={vocales}
            scrollAnimationDuration={100}
            renderItem={({ item }) => (
              <Image source={item} style={{ width: 150, height: 150 }} />
            )}
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
            title="i"
            buttonStyle={{ backgroundColor: "#926247" }}
            onPress={() => setUserWords("i")}
          />
          <Button
            containerStyle={{
              width: 100,
              height: 150,
              flexGrow: 10,
              margin: 10,
            }}
            disabled={disabled}
            title="o"
            buttonStyle={{ backgroundColor: "#926247" }}
            onPress={() => setUserWords("o")}
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
            g
          </Button>
          <Button
            containerStyle={{
              width: 100,
              height: 150,
              flexGrow: 10,
              margin: 10,
            }}
            disabled={disabled}
            title="u"
            buttonStyle={{ backgroundColor: "#926247" }}
            onPress={() => setUserWords("u")}
          />

          <Button
            containerStyle={{
              width: 100,
              height: 150,
              flexGrow: 10,
              margin: 10,
            }}
            disabled={disabled}
            title="a"
            buttonStyle={{ backgroundColor: "#926247" }}
            onPress={() => setUserWords("a")}
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
            q
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
            r
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
            v
          </Button>
          <Button
            containerStyle={{
              width: 100,
              height: 150,
              flexGrow: 10,
              margin: 10,
            }}
            disabled={disabled}
            title="e"
            buttonStyle={{ backgroundColor: "#926247" }}
            onPress={() => setUserWords("e")}
          />
        </View>
      )}
    </View>
  );
}
