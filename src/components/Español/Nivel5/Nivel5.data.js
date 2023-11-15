import * as Yup from "yup";

export function initialValues() {
  return {
    Nivel5: "",
  };
}

export function validationSchema() {
  return Yup.object({
    Nivel5: Yup.string(),
  });
}
