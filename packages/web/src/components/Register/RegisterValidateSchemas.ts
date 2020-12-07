import {
  RegisterValidateErrorMsg,
  RegisterRequiredErrorMsg,
} from "./RegisterValidateErrorMsg";
import * as Yup from "yup";

export const RegisterValidateSchemas = Yup.object().shape({
  firstName: Yup.string()
    .min(3, RegisterValidateErrorMsg.firstName)
    .max(16, RegisterValidateErrorMsg.firstName)
    .required(RegisterRequiredErrorMsg.firstName),
  lastName: Yup.string()
    .min(3, RegisterValidateErrorMsg.lastName)
    .max(16, RegisterValidateErrorMsg.lastName)
    .required(RegisterRequiredErrorMsg.lastName),
  email: Yup.string()
    .email(RegisterValidateErrorMsg.email)
    .required(RegisterRequiredErrorMsg.email),
  password: Yup.string()
    .min(6, RegisterValidateErrorMsg.password)
    .required(RegisterRequiredErrorMsg.password),
  phone: Yup.string(),
  postal: Yup.string(),
  city: Yup.string(),
  street: Yup.string(),
});
