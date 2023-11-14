import * as Yup from "yup";

export function initialValues() {
  return {
    Nivel2: "",
  };
}

export function validationSchema() {
  return Yup.object({
    Nivel2: Yup.string(),
  });
}
