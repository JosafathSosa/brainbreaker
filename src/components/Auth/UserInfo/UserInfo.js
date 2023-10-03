import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as ImagePicker from "expo-image-picker";
import { Avatar, Button, Input } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
//Importaciones firebase
import { getAuth, updateProfile } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Toast from "react-native-toast-message";
import { useFormik } from "formik";
//Importaciones dentro de la carpeta
import { styles } from "./UserInfo.styles";
import { initialValues, validationSchema } from "./UserInfo.data";
import { screen } from "../../../utils/screenName";

export function UserInfo() {
  const navigation = useNavigation();

  const [saludo, setSaludo] = useState("Bienvenido a Brain Breaker");
  const { uid, photoURL, displayName, email } = getAuth().currentUser;

  const [avatar, setAvatar] = useState(null);
  const [image, setImage] = useState(photoURL);

  const changeAvatar = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      //console.log(result);
      uploadImage(result.assets[0].uri);
    }
  };

  const uploadImage = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    const storage = getStorage();
    const storageRef = ref(storage, `avatar/${uid}`);

    uploadBytes(storageRef, blob).then((snapshot) => {
      uploadPhotoUrl(snapshot.metadata.fullPath);
      //console.log(snapshot.metadata.fullPath);
    });
  };

  const uploadPhotoUrl = async (imagePath) => {
    const storage = getStorage();
    const imageRef = ref(storage, imagePath);

    const imageUrl = await getDownloadURL(imageRef);

    const auth = getAuth();
    updateProfile(auth.currentUser, { photoURL: imageUrl });
    setAvatar(imageUrl);
  };

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        console.log(formValue);
        const { displayName } = formValue;
        const currentUser = getAuth().currentUser;

        await updateProfile(currentUser, { displayName });
        navigation.navigate(screen.cuenta.login);
      } catch (error) {
        Toast.show({
          type: "error",
          position: "top",
          text1: "Hubo un error al cambiar el nombre",
        });
      }
    },
  });

  useEffect(() => {
    setInterval(() => {
      setSaludo("Unos pasos más y queda listo, porfavor ingresa tus datos");
    }, 3000);
  }, []);

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1, backgroundColor: "#1f160f" }}
    >
      <View style={styles.container}>
        <Text
          style={{
            color: "#3d4a26",
            fontWeight: "bold",
            fontSize: 40,
            marginTop: 80,
            marginBottom: 80,
          }}
        >
          Brain Breaker
        </Text>
        <View style={styles.message}>
          <Text style={styles.title}>{saludo}</Text>
        </View>
        <Avatar
          size={200}
          containerStyle={{ backgroundColor: "brown" }}
          icon={{ type: "material", name: "person" }}
          rounded
          source={{ uri: avatar }}
        >
          <Avatar.Accessory size={50} onPress={changeAvatar} />
        </Avatar>
        <Input
          placeholder="¿Como te llamas?"
          containerStyle={{ width: "80%", marginTop: 20 }}
          style={{ color: "white" }}
          onChangeText={(text) => formik.setFieldValue("displayName", text)}
          errorMessage={formik.errors.displayName}
        />
        <Button
          title="Continuar"
          containerStyle={styles.btnContainer}
          buttonStyle={styles.btn}
          onPress={formik.handleSubmit}
          loading={formik.isSubmitting}
        />
      </View>
    </KeyboardAwareScrollView>
  );
}
