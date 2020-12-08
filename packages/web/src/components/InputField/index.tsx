import React from "react";
import { FieldProps } from "formik";
import { Input, Form } from "antd";

export const InputField: React.FC<
  FieldProps<any> & { prefix: React.ReactNode }
> = ({
  field, // {name, value, onChange, onBlur}
  form: { touched, errors },
  ...props
}) => {
  return (
    <Form.Item
      help={touched[field.name] && errors[field.name]}
      validateStatus={
        touched[field.name] && errors[field.name] ? "error" : "success"
      }
    >
      <Input {...field} {...props} />
    </Form.Item>
  );
};
