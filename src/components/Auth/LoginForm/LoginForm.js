import React, { useState } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import { styles } from "./LoginForm.styles";
import { useFormik } from "formik";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { Image, Input, Button, Icon } from "@rneui/base";

import { validationSchema, initialValues } from "./LoginForm.data";

import { screen } from "../../../utils/screenName";

export function LoginForm(props) {
  const navigation = useNavigation();

  const [showPass, setShowPass] = useState(true);

  const showPassword = () => setShowPass((prevState) => !prevState);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const auth = getAuth();
        await signInWithEmailAndPassword(
          auth,
          formValue.email,
          formValue.password
        );
      } catch (error) {
        console.log(error);
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Usuario y/o contraseña incorrecta",
        });
      }
    },
  });

  return (
    <View style={styles.loginContainer}>
      <Text style={styles.title}>Inicia Sesion</Text>
      <View style={styles.inputs}>
        <Text style={styles.inputLabel}>Email: </Text>
        <Input
          placeholder="Ingresa tu email:"
          containerStyle={styles.input}
          inputContainerStyle={{ borderBottomWidth: 0, marginTop: 4 }}
          style={{ color: "white" }}
          leftIcon={{
            type: "material-community",
            name: "email",
            style: { marginTop: 3, marginRight: 6, marginLeft: 5 },
            iconStyle: { color: "white" },
          }}
          onChangeText={(text) => formik.setFieldValue("email", text)}
          errorMessage={formik.errors.email}
        ></Input>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.inputLabel}>Contraseña: </Text>
          <Input
            secureTextEntry={showPass}
            placeholder="Ingresa tu contraseña:"
            containerStyle={styles.input}
            inputStyle={styles.inputStyle}
            style={{ color: "white" }}
            inputContainerStyle={{ borderBottomWidth: 0, marginTop: 5 }}
            leftIcon={{
              type: "material-community",
              name: "lock-outline",
              style: { marginTop: 3, marginRight: 6, marginLeft: 5 },
              iconStyle: { color: "white" },
            }}
            rightIcon={{
              type: "material-community",
              name: showPass ? "eye-off-outline" : "eye-outline",
              style: { marginTop: 3, marginRight: 6 },
              iconStyle: { color: "white" },
              onPress: showPassword,
            }}
            onChangeText={(text) => formik.setFieldValue("password", text)}
            errorMessage={formik.errors.password}
          ></Input>
        </View>
      </View>
      <Button
        iconPosition="right"
        icon={
          <Icon
            type="material-community"
            name="arrow-right-thin"
            color="white"
          />
        }
        title="Sign In"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
      <View style={styles.registerContainer}>
        <Text style={styles.register}>¿No tienes cuenta?</Text>
        <Text
          style={styles.registerBtn}
          onPress={() => navigation.navigate(screen.cuenta.register)}
        >
          Registrate
        </Text>
      </View>
    </View>
  );
}
