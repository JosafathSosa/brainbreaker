import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Image, Icon, Button } from "@rneui/base";

//FIREBASE
import { getAuth } from "firebase/auth";

import { styles } from "./Menu.styles";
import { screen } from "../../../utils/screenName";

export function Menu() {
  const navigation = useNavigation();
  const [nombre, setNombre] = useState(null);

  useEffect(() => {
    const auth = getAuth().currentUser.displayName;
    setNombre(auth);
  }, []);

  const insets = useSafeAreaInsets();
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
      <View
        style={{
          flexDirection: "row",

          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.title}>Bienvenido {nombre}</Text>
        <Icon
          type="material-community"
          name="account"
          size={30}
          color="white"
          containerStyle={{ marginRight: 20, marginTop: 30 }}
          onPress={() => navigation.navigate(screen.cuenta.account)}
        />
      </View>
      <View style={{ alignItems: "center", marginTop: 50 }}>
        <Image
          source={require("../../../../assets/pp.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.temas}>
        <Text style={{ color: "white", fontSize: 20 }}>
          Selecciona el tema:
        </Text>
        <Button
          title="Geografia"
          containerStyle={styles.btnContainer1}
          buttonStyle={styles.btn}
        />
        <Button
          title="Español"
          containerStyle={styles.btnContainer1}
          buttonStyle={styles.btn}
        />
      </View>
    </View>
  );
}
