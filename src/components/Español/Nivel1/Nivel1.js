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
  const [userWords, setUserWords] = useState([]);
  const [contador, setContador] = useState(0);
  const [disabled, setDisabled] = useState(false);

  setTimeout(() => {
    setLoop(false);
  }, 5000);

  useEffect(() => {
    //Aqui se cual letra esta cambiando
    const res = rightWords.filter((letra) => letra != userWords[0]);

    //Si el contador llega a si que son las letras buenas, los botones se desabilitan
    setContador(contador + 1);
    if (contador === 5) {
      setDisabled(true);
    }

    console.log(contador);
  }, [userWords]);

  const goLevel2 = () => {
    navigate.navigate(screen.juego.nivel2);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>1. Vocales</Text>
        <Text style={styles.nivel}>{nivel} of 5</Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",

          height: 300,
        }}
      >
        {disabled ? (
          <Text style={{ color: "white", fontSize: 20 }}>
            ¡Bien hecho! <Text onPress={() => goLevel2()}>Siguiente nivel</Text>
          </Text>
        ) : (
          <Carousel
            width={300}
            height={300}
            autoPlay={true}
            data={vocales}
            loop={loop}
            style={styles}
            scrollAnimationDuration={300}
            renderItem={({ item }) => (
              <Image source={item} style={{ width: 150, height: 250 }} />
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
            onPress={() => setUserWords([...rightWords[2]])}
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
            onPress={() => setUserWords([...rightWords[3]])}
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
            onPress={() => setUserWords([...rightWords[4]])}
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
            onPress={() => setUserWords([...rightWords[0]])}
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
            onPress={() => setUserWords([...rightWords[1]])}
          />
        </View>
      )}
    </View>
  );
}
