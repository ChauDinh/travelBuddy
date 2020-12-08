"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterValidateSchemas = exports.RegisterRequiredErrorMsg = exports.RegisterValidateErrorMsg = void 0;
const yup = __importStar(require("yup"));
const phoneRegex = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const postalRegex = /^(?:[A-Z0-9]+([- ]?[A-Z0-9]+)*)?$/;
const cityRegex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
const streetRegex = /[\w',-\\/.\s]/;
exports.RegisterValidateErrorMsg = {
    firstName: "First name must be length between 3 and 16",
    lastName: "Last name must be length between 3 and 16",
    email: "Invalid email",
    password: "Password must be length greater than 6 character",
    phone: "Invalid phone number",
    postal: "Invalid postal number",
    city: "Invalid city name",
    street: "Invalid street name",
};
exports.RegisterRequiredErrorMsg = {
    firstName: "First name is required!",
    lastName: "Last name is required!",
    email: "Email is required!",
    password: "Password is required!",
};
exports.RegisterValidateSchemas = yup.object().shape({
    firstName: yup
        .string()
        .min(3, exports.RegisterValidateErrorMsg.firstName)
        .max(16, exports.RegisterValidateErrorMsg.firstName)
        .required(exports.RegisterRequiredErrorMsg.firstName),
    lastName: yup
        .string()
        .min(3, exports.RegisterValidateErrorMsg.lastName)
        .max(16, exports.RegisterValidateErrorMsg.lastName)
        .required(exports.RegisterRequiredErrorMsg.lastName),
    email: yup
        .string()
        .email(exports.RegisterValidateErrorMsg.email)
        .required(exports.RegisterRequiredErrorMsg.email),
    password: yup
        .string()
        .min(6, exports.RegisterValidateErrorMsg.password)
        .required(exports.RegisterRequiredErrorMsg.password),
    phone: yup.string().matches(phoneRegex, exports.RegisterValidateErrorMsg.phone),
    postal: yup.string().matches(postalRegex, exports.RegisterValidateErrorMsg.postal),
    city: yup.string().matches(cityRegex, exports.RegisterValidateErrorMsg.city),
    street: yup.string().matches(streetRegex, exports.RegisterValidateErrorMsg.street),
});
//# sourceMappingURL=register.js.map