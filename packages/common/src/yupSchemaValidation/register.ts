import * as yup from "yup";

const phoneRegex = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const postalRegex = /^(?:[A-Z0-9]+([- ]?[A-Z0-9]+)*)?$/;
const cityRegex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
const streetRegex = /[\w',-\\/.\s]/;

export const RegisterValidateErrorMsg = {
  firstName: "First name must be length between 3 and 16",
  lastName: "Last name must be length between 3 and 16",
  email: "Invalid email",
  password: "Password must be length greater than 6 character",
  phone: "Invalid phone number",
  postal: "Invalid postal number",
  city: "Invalid city name",
  street: "Invalid street name",
};

export const RegisterRequiredErrorMsg = {
  firstName: "First name is required!",
  lastName: "Last name is required!",
  email: "Email is required!",
  password: "Password is required!",
};

export const RegisterValidateSchemas = yup.object().shape({
  firstName: yup
    .string()
    .min(3, RegisterValidateErrorMsg.firstName)
    .max(16, RegisterValidateErrorMsg.firstName)
    .required(RegisterRequiredErrorMsg.firstName),
  lastName: yup
    .string()
    .min(3, RegisterValidateErrorMsg.lastName)
    .max(16, RegisterValidateErrorMsg.lastName)
    .required(RegisterRequiredErrorMsg.lastName),
  email: yup
    .string()
    .email(RegisterValidateErrorMsg.email)
    .required(RegisterRequiredErrorMsg.email),
  password: yup
    .string()
    .min(6, RegisterValidateErrorMsg.password)
    .required(RegisterRequiredErrorMsg.password),
  phone: yup.string().matches(phoneRegex, RegisterValidateErrorMsg.phone),
  postal: yup.string().matches(postalRegex, RegisterValidateErrorMsg.postal),
  city: yup.string().matches(cityRegex, RegisterValidateErrorMsg.city),
  street: yup.string().matches(streetRegex, RegisterValidateErrorMsg.street),
});
