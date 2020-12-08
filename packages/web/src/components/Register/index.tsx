import React from "react";
import * as AntDesignElements from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  CompassOutlined,
  GlobalOutlined,
  SolutionOutlined,
  FlagOutlined,
} from "@ant-design/icons";
import { Formik, Field, Form } from "formik";
import { RegisterValidateSchemas } from "@abb/common";

import "./index.css";
import { InputField } from "../InputField";

const { Form: AntDesignForm, Button, Row, Col } = AntDesignElements;
interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone?: string;
  street?: string;
  postal?: string;
  city?: string;
}

export const Register: React.FC<FormValues> = () => {
  return (
    <div className="register-container">
      <label className="register-title">Create Account</label>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          phone: "",
          postal: "",
          street: "",
          city: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={RegisterValidateSchemas}
      >
        {({ handleSubmit }) => {
          return (
            <Form>
              <label
                className="input-group-label"
                style={{ marginBottom: "10px !important" }}
              >
                <SolutionOutlined /> Personal Information
              </label>
              <br />
              <br />
              <Field
                name="firstName"
                type="text"
                prefix={<UserOutlined className="site-form-item-icon" />}
                component={InputField}
                placeholder="First name"
              />
              <Field
                name="lastName"
                type="text"
                prefix={<UserOutlined className="site-form-item-icon" />}
                component={InputField}
                placeholder="Last name"
              />
              <Field
                name="email"
                type="email"
                placeholder="Email"
                prefix={<MailOutlined className="site-form-item-icon" />}
                component={InputField}
              />
              <Field
                name="password"
                type="password"
                placeholder="Password"
                prefix={<LockOutlined className="site-form-item-icon" />}
                component={InputField}
              />
              <label className="input-group-label">
                <FlagOutlined /> Address (optional)
              </label>
              <br />
              <br />
              <Field
                name="phone"
                type="text"
                placeholder="Phone number"
                prefix={<PhoneOutlined className="site-form-item-icon" />}
                component={InputField}
              />
              <Field
                name="street"
                type="text"
                placeholder="Street"
                prefix={<EnvironmentOutlined className="site-form-item-icon" />}
                component={InputField}
              />
              <Field
                name="city"
                type="text"
                placeholder="City"
                prefix={<CompassOutlined className="site-form-item-icon" />}
                component={InputField}
              />
              <Field
                name="postal"
                type="text"
                placeholder="Postal Code"
                prefix={<GlobalOutlined className="site-form-item-icon" />}
                component={InputField}
              />
              <Row>
                <Col
                  span={12}
                  style={{ display: "flex", justifyContent: "flex-start" }}
                >
                  <AntDesignForm.Item>
                    <a className="login-form-forgot" href="/login">
                      Already have account?
                    </a>
                  </AntDesignForm.Item>
                </Col>
                <Col
                  span={12}
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <AntDesignForm.Item>
                    <a className="login-form-forgot" href="/">
                      Our terms of privacy
                    </a>
                  </AntDesignForm.Item>
                </Col>
              </Row>
              <AntDesignForm.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Sign Up
                </Button>
              </AntDesignForm.Item>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
