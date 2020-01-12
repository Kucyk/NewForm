import * as Yup from "yup";

const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

export const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "Musi być dłuższe")
    .max(255, "Musi być krótsze niż 255")
    .required("Pole obowiązkowe"),
  lastName: Yup.string()
    .min(3, "Musi być dłuższe")
    .max(255, "Musi być krótsze niż 255")
    .required("Pole obowiązkowe"),
  email: Yup.string()
    .email("Email nie jest prawidłowy")
    .max(255, "Email musi być krótszy niż 255")
    .required("Pole obowiązkowe"),
  occupation: Yup.string()
    .min(3, "Musi być dłuższe")
    .max(255, "Musi być krótsze niż 255")
    .required("Pole obowiązkowe"),
  city: Yup.string()
    .min(3, "Musi być dłuższe")
    .max(255, "Musi być krótsze niż 255")
    .required("Pole obowiązkowe"),
  number: Yup.string()
    .matches(phoneRegExp, "Numer nieprawidłowy")
    .required("Pole obowiązkowe")
});
