import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { styles } from "./Recompensas.styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getAuth } from "firebase/auth";
import {
  doc,
  onSnapshot,
  collection,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { screen } from "../../utils/screenName";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@rneui/base";
import { db } from "../../utils/firebase";
import { map } from "lodash";
import { AirbnbRating } from "@rneui/base";

export function Recompensas() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const { displayName, uid } = getAuth().currentUser;
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const q = query(collection(db, "PuntosEspañol"), where("uid", "==", uid));

    onSnapshot(q, (snap) => {
      const data = snap.docs.map((doc) => doc.data());

      setReviews(data);
    });
  }, []);

  const goToMenu = () => {
    navigation.navigate(screen.juego.juego);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#702901", // Paddings to handle safe area
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <View style={styles.name}>
        <Text style={styles.usrName}>¡Bien hecho! {displayName}</Text>
        <Text style={styles.description}>Aqui tienes tus resultados</Text>
      </View>

      <View style={styles.results}>
        <View style={{ marginTop: 50, justifyContent: "center" }}>
          <Text style={{ color: "white", marginLeft: 10, fontSize: 20 }}>
            Vocales:
          </Text>
          <AirbnbRating
            defaultRating={reviews ? reviews[0].Nivel1 : 3}
            showRating={false}
            size={35}
            isDisabled
            starContainerStyle={{ marginBottom: 20 }}
          />
          <Text style={{ color: "white", marginLeft: 10, fontSize: 20 }}>
            Tildes:
          </Text>
          <AirbnbRating
            defaultRating={reviews ? reviews[0].Nivel2 : 3}
            showRating={false}
            size={35}
            isDisabled
            starContainerStyle={{ marginBottom: 20 }}
          />
          <Text style={{ color: "white", marginLeft: 10, fontSize: 20 }}>
            Sujeto:
          </Text>
          <AirbnbRating
            defaultRating={reviews ? reviews[0].Nivel3 : 3}
            showRating={false}
            size={35}
            isDisabled
            starContainerStyle={{ marginBottom: 20 }}
          />
          <Text style={{ color: "white", marginLeft: 10, fontSize: 20 }}>
            Antonimos:
          </Text>
          <AirbnbRating
            defaultRating={reviews ? reviews[0].Nivel4 : 3}
            showRating={false}
            size={35}
            isDisabled
            starContainerStyle={{ marginBottom: 20 }}
          />
          <Text style={{ color: "white", marginLeft: 10, fontSize: 20 }}>
            Sinonimos:
          </Text>
          <AirbnbRating
            defaultRating={reviews ? reviews[0].Nivel5 : 3}
            showRating={false}
            size={35}
            isDisabled
            starContainerStyle={{ marginBottom: 20 }}
          />
        </View>
        <Button title="Ok" onPress={() => goToMenu()} />
      </View>
    </View>
  );
}
