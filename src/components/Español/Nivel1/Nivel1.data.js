import * as Yup from "yup";

export function initialValues() {
  return {
    Nivel1: " ",
  };
}

export function validationSchema() {
  return Yup.object({
    Nivel1: Yup.string(),
  });
}
