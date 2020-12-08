import * as yup from "yup";
export declare const RegisterValidateErrorMsg: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    postal: string;
    city: string;
    street: string;
};
export declare const RegisterRequiredErrorMsg: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
};
export declare const RegisterValidateSchemas: yup.ObjectSchema<import("yup/lib/object").Assign<Record<string, yup.AnySchema<any, any, any> | import("yup/lib/Reference").default<unknown> | import("yup/lib/Lazy").default<any, any>>, {
    firstName: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    lastName: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    email: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    password: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    phone: yup.StringSchema<string | undefined, Record<string, any>, string | undefined>;
    postal: yup.StringSchema<string | undefined, Record<string, any>, string | undefined>;
    city: yup.StringSchema<string | undefined, Record<string, any>, string | undefined>;
    street: yup.StringSchema<string | undefined, Record<string, any>, string | undefined>;
}>, Record<string, any>, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<Record<string, yup.AnySchema<any, any, any> | import("yup/lib/Reference").default<unknown> | import("yup/lib/Lazy").default<any, any>>, {
    firstName: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    lastName: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    email: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    password: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    phone: yup.StringSchema<string | undefined, Record<string, any>, string | undefined>;
    postal: yup.StringSchema<string | undefined, Record<string, any>, string | undefined>;
    city: yup.StringSchema<string | undefined, Record<string, any>, string | undefined>;
    street: yup.StringSchema<string | undefined, Record<string, any>, string | undefined>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<Record<string, yup.AnySchema<any, any, any> | import("yup/lib/Reference").default<unknown> | import("yup/lib/Lazy").default<any, any>>, {
    firstName: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    lastName: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    email: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    password: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    phone: yup.StringSchema<string | undefined, Record<string, any>, string | undefined>;
    postal: yup.StringSchema<string | undefined, Record<string, any>, string | undefined>;
    city: yup.StringSchema<string | undefined, Record<string, any>, string | undefined>;
    street: yup.StringSchema<string | undefined, Record<string, any>, string | undefined>;
}>>>;
