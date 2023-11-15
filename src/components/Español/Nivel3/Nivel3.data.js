import * as Yup from "yup";

export function initialValues() {
  return {
    Nivel3: "",
  };
}

export function validationSchema() {
  return Yup.object({
    Nivel3: Yup.string(),
  });
}
