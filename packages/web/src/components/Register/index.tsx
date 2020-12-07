import React from "react";
import { Form, Input, Button, Row, Col } from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  CompassOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { Formik } from "formik";

import "./index.css";
import { RegisterValidateSchemas } from "./RegisterValidateSchemas";

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
      <label className="register-title">Register</label>
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
        {({
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => {
          console.log(errors);
          return (
            <form onSubmit={handleSubmit}>
              <label
                className="input-group-label"
                style={{ marginBottom: "10px !important" }}
              >
                Personal Information
              </label>
              <Form.Item
                help={
                  touched.firstName && errors.firstName
                    ? errors.firstName
                    : null
                }
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  name="firstName"
                  type="text"
                  placeholder="First name"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Form.Item>
              <Form.Item
                help={
                  touched.lastName && errors.lastName ? errors.lastName : null
                }
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  name="lastName"
                  type="text"
                  placeholder="Last name"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Form.Item>
              <Form.Item
                help={touched.email && errors.email ? errors.email : null}
              >
                <Input
                  prefix={<MailOutlined className="site-form-item-icon" />}
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Form.Item>
              <Form.Item
                help={
                  touched.password && errors.password ? errors.password : null
                }
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Form.Item>
              <label className="input-group-label">Address (optional)</label>
              <Form.Item
                help={touched.phone && errors.phone ? errors.phone : null}
              >
                <Input
                  prefix={<PhoneOutlined className="site-form-item-icon" />}
                  name="phone"
                  type="text"
                  placeholder="Phone number"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Form.Item>
              <Form.Item
                help={touched.street && errors.street ? errors.street : null}
              >
                <Input
                  prefix={
                    <EnvironmentOutlined className="site-form-item-icon" />
                  }
                  name="street"
                  type="text"
                  placeholder="Street"
                  value={values.street}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Form.Item>
              <Form.Item
                help={touched.city && errors.city ? errors.city : null}
              >
                <Input
                  prefix={<CompassOutlined className="site-form-item-icon" />}
                  name="city"
                  type="text"
                  placeholder="City"
                  value={values.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></Input>
              </Form.Item>
              <Form.Item
                help={touched.postal && errors.postal ? errors.postal : null}
              >
                <Input
                  prefix={<GlobalOutlined className="site-form-item-icon" />}
                  name="postal"
                  type="text"
                  placeholder="Postal Code"
                  value={values.postal}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></Input>
              </Form.Item>
              <Row>
                <Col
                  span={12}
                  style={{ display: "flex", justifyContent: "flex-start" }}
                >
                  <Form.Item>
                    <a className="login-form-forgot" href="/login">
                      Already have account?
                    </a>
                  </Form.Item>
                </Col>
                <Col
                  span={12}
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <Form.Item>
                    <a className="login-form-forgot" href="/">
                      Our terms of privacy
                    </a>
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Register
                </Button>
              </Form.Item>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};
