import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("To nie jest email")
    .max(255, "Email musi byc krótszy")
    .required("Musisz wpisać email"),
  password: Yup.string()
    .min(6, "Hasło musi być dłuższe")
    .max(255, "Hasło musi być krótsze")
    .required("Musisz wpisać hasło")
});
