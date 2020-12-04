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

interface FormValues {
  username: string;
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
          username: "",
          email: "",
          password: "",
          phone: "",
          postal: "",
          street: "",
          city: "",
        }}
        onSubmit={(values) => console.log(values)}
      >
        {({ isSubmitting, handleChange, handleSubmit, values, errors }) => (
          <Form onSubmitCapture={handleSubmit}>
            <label
              className="input-group-label"
              style={{ marginBottom: "10px !important" }}
            >
              Personal Information
            </label>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                name="username"
                type="text"
                placeholder="Username"
                value={values.username}
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your Email!" }]}
            >
              <Input
                prefix={<MailOutlined className="site-form-item-icon" />}
                name="email"
                type="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                name="password"
                type="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
              />
            </Form.Item>
            <label className="input-group-label">Address (optional)</label>
            <Form.Item name="phone" rules={[{ required: false }]}>
              <Input
                prefix={<PhoneOutlined className="site-form-item-icon" />}
                name="phone"
                type="text"
                placeholder="Phone number"
                value={values.phone}
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item name="street" rules={[{ required: false }]}>
              <Input
                prefix={<EnvironmentOutlined className="site-form-item-icon" />}
                name="street"
                type="text"
                placeholder="Street"
                value={values.street}
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item name="city" rules={[{ required: false }]}>
              <Input
                prefix={<GlobalOutlined className="site-form-item-icon" />}
                name="city"
                type="text"
                placeholder="City"
                value={values.city}
                onChange={handleChange}
              ></Input>
            </Form.Item>
            <Form.Item name="postal" rules={[{ required: false }]}>
              <Input
                prefix={<CompassOutlined className="site-form-item-icon" />}
                name="postal"
                type="text"
                placeholder="Postal Code"
                value={values.postal}
                onChange={handleChange}
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
          </Form>
        )}
      </Formik>
    </div>
  );
};
