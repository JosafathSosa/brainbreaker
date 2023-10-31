import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button, Input } from "@rneui/base";
import { Modal } from "../../Shared/Modal";

import { styles } from "./ChangeName.styles";

export function ChangeName() {
  const [show, setShow] = useState(false);

  const onCloseOpenModal = () => setShow((prevState) => !prevState);
  return (
    <View>
      <Button
        title="Cambiar nombre"
        containerStyle={styles.changeName}
        buttonStyle={styles.btnChangeName}
        onPress={() => setShow(true)}
      />
      <Modal show={show} close={onCloseOpenModal}>
        <View>
          <Text style={styles.text}>Ingresa el nuevo nombre</Text>
          <Input
            placeholder="Nombre:"
            inputContainerStyle={styles.inputContainer}
          />
          <Button
            title="Cambiar"
            containerStyle={styles.btnContainer}
            buttonStyle={styles.btn}
          />
        </View>
      </Modal>
    </View>
  );
}
