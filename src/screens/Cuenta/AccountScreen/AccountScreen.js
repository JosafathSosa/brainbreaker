import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Icon, Button, Avatar } from "@rneui/base";

//FIREBASE
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAuth, signOut, updateProfile } from "firebase/auth";

import { ChangeName, ChangePass } from "../../../components/Account";
import { styles } from "./AccountScreen.styles";

export function AccountScreen() {
  const { uid, photoURL, displayName, email } = getAuth().currentUser;
  const [avatar, setAvatar] = useState(photoURL);

  const changeAvatar = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
      uploadImage(result);
    }
  };

  const uploadImage = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    const storage = getStorage();
    const storageRef = ref(storage, `avatar/${uid}`);

    uploadBytes(storageRef, blob).then((snapshot) => {
      console.log(snapshot.metadata.fullPath);
      uploadPhotoUrl(snapshot.metadata.fullPath);
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

  const logOut = async () => {
    const auth = getAuth();
    await signOut(auth);
  };

  return (
    <View style={styles.container}>
      <View style={styles.userData}>
        <Avatar
          size={100}
          containerStyle={styles.avatar}
          icon={{ type: "material", name: "person", color: "black" }}
          source={{ uri: avatar }}
          rounded
        >
          <Avatar.Accessory size={30} onPress={changeAvatar} />
        </Avatar>
        <Text style={styles.userName}>{displayName}</Text>
      </View>
      <ChangeName />
      <ChangePass />
      <Button
        containerStyle={styles.logOut}
        buttonStyle={styles.btnLogOut}
        onPress={logOut}
      >
        Cerrar Sesión
      </Button>
    </View>
  );
}
