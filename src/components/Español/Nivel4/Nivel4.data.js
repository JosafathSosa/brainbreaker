import * as Yup from "yup";

export function initialValues() {
  return {
    Nivel4: "",
  };
}

export function validationSchema() {
  return Yup.object({
    Nivel4: Yup.string(),
  });
}
