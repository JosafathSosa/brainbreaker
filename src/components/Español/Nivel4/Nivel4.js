import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Button } from "@rneui/base";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "../Nivel4/Nivel4.styles";
import Carousel from "react-native-reanimated-carousel";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils/screenName";
import { initialValues, validationSchema } from "./Nivel4.data";
import { Formik, useFormik } from "formik";
import Toast from "react-native-toast-message";
import { db } from "../../../utils/firebase";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export function Nivel4(props) {
  const navigation = useNavigation();
  const { route } = props;
  const { uid } = getAuth().currentUser;
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
    "Pequeño",
    "Triste",
    "Lento",
    "Bajo",
    "Apagar",
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
  const [intentos, setIntentos] = useState(2);

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

  const intentoFallido = () => {
    const x = intentos;
    setIntentos(x - 1);

    if (intentos === 0) {
      alert("¡Perdiste! Intentalo de nuevo");
      navigation.navigate(screen.juego.juego);
    } else {
      alert(`Te quedan: ${intentos} intentos `);
    }
  };

  useEffect(() => {
    console.log(totalPoints);
    const res = words.filter((word) => word != userWords);

    var i = points;
    setPoints(i + 1);
    setTotalPoints(points);
    formik.setFieldValue("Nivel4", points);
    if (words.length === 1) {
      setDisabled(true);
    }

    setWords(res);
  }, [userWords]);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const myDB = doc(db, "PuntosEspañol", uid);
        await updateDoc(myDB, formValue);

        navigation.navigate(screen.juego.nivel5, {
          params: { puntos: points + totalPoints, nivel: nivel + 1 },
        });
      } catch (error) {
        console.log(error);
        Toast.show({
          type: "error",
          position: "top",
          text1: "No se pudieron enviar los datos",
        });
      }
    },
  });

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
        <Text style={styles.title}>4. Antónimos</Text>
        <Text style={styles.nivel}>4 de 5</Text>
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
            <Text style={{ color: "#926247" }} onPress={formik.handleSubmit}>
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
            buttonStyle={{ backgroundColor: "#926247" }}
            onPress={() => intentoFallido()}
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
            title="Pequeño"
            buttonStyle={{ backgroundColor: "#926247" }}
            onPress={() => setUserWords("Pequeño")}
          />

          <Button
            containerStyle={{
              width: 100,
              height: 150,
              flexGrow: 10,
              margin: 10,
            }}
            buttonStyle={{ backgroundColor: "#926247" }}
            onPress={() => intentoFallido()}
          >
            Divertido
          </Button>

          <Button
            containerStyle={{
              width: 100,
              height: 150,
              flexGrow: 10,
              margin: 10,
            }}
            disabled={disabled}
            title="Triste"
            buttonStyle={{ backgroundColor: "#926247" }}
            onPress={() => setUserWords("Triste")}
          />

          <Button
            containerStyle={{
              width: 100,
              height: 150,
              flexGrow: 10,
              margin: 10,
            }}
            disabled={disabled}
            title="Lento"
            buttonStyle={{ backgroundColor: "#926247" }}
            onPress={() => setUserWords("Lento")}
          />

          <Button
            containerStyle={{
              width: 100,
              height: 150,
              flexGrow: 10,
              margin: 10,
            }}
            disabled={disabled}
            title="Bajo"
            buttonStyle={{ backgroundColor: "#926247" }}
            onPress={() => setUserWords("Bajo")}
          />

          <Button
            containerStyle={{
              width: 100,
              height: 150,
              flexGrow: 10,
              margin: 10,
            }}
            buttonStyle={{ backgroundColor: "#926247" }}
            onPress={() => intentoFallido()}
          >
            Brillar
          </Button>

          <Button
            containerStyle={{
              width: 100,
              height: 150,
              flexGrow: 10,
              margin: 10,
            }}
            buttonStyle={{ backgroundColor: "#926247" }}
            onPress={() => intentoFallido()}
          >
            Importante
          </Button>

          <Button
            containerStyle={{
              width: 100,
              height: 150,
              flexGrow: 10,
              margin: 10,
            }}
            disabled={disabled}
            title="Apagar"
            buttonStyle={{ backgroundColor: "#926247" }}
            onPress={() => setUserWords("Apagar")}
          />
        </View>
      )}
    </View>
  );
}
