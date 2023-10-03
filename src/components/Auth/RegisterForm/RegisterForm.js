import React, { useState } from "react";
import { View, Text } from "react-native";
import { Image, Input, Button, Icon } from "@rneui/base";
import Toast from "react-native-toast-message";
import { initialValues, validationSchema } from "./RegisterForm.data";
import { useFormik } from "formik";
import { useNavigation } from "@react-navigation/native";

import { screen } from "../../../utils/screenName";
import { styles } from "./RegisterForm.styles";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export function RegisterForm() {
  const navigation = useNavigation();

  const [showPassword, setShowPassword] = useState(true);

  const showPass = () => setShowPassword((prevState) => !prevState);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const auth = getAuth();
        await createUserWithEmailAndPassword(
          auth,
          formValue.email,
          formValue.password
        );
        navigation.navigate(screen.cuenta.info);
        console.log(formValue);
      } catch (error) {
        Toast.show({
          type: "error",
          position: "top",
          text1: "Se produjo un error al registrarse en BrainBreaker",
        });
      }
    },
  });
  return (
    <View style={styles.loginContainer}>
      <Text style={styles.title}>Registrate gratis</Text>
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
            secureTextEntry={showPassword}
            placeholder="Ingresa tu contraseña:"
            containerStyle={styles.input2}
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
              name: showPassword ? "eye-off-outline" : "eye-outline",
              style: { marginTop: 3, marginRight: 6 },
              iconStyle: { color: "white" },
              onPress: showPass,
            }}
            onChangeText={(text) => formik.setFieldValue("password", text)}
            errorMessage={formik.errors.password}
          ></Input>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.inputLabel}>Repite la contraseña: </Text>
          <Input
            secureTextEntry={showPassword}
            placeholder="Ingresa tu contraseña:"
            containerStyle={styles.input3}
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
              name: showPassword ? "eye-off-outline" : "eye-outline",
              style: { marginTop: 3, marginRight: 6 },
              iconStyle: { color: "white" },
            }}
            onChangeText={(text) =>
              formik.setFieldValue("repeatPassword", text)
            }
            errorMessage={formik.errors.repeatPassword}
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
        title="Sign Up"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
}
