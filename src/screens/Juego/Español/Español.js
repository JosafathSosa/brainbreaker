import React, { useEffect, useState } from "react";
import { View, Text, FlatListComponent } from "react-native";
import { Nivel1 } from "../../../components/Español/Nivel1/Nivel1";

import { useSafeAreaInsets } from "react-native-safe-area-context";

export function Español() {
  const insets = useSafeAreaInsets();

  const [cont, setCont] = useState(5);
  const [nivel1, setNivel1] = useState(false);

  useEffect(() => {
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
