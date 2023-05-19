import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Modal } from 'antd';

import Password from './Password';
import Btn from './Btn';
import Email from './Email';

const LoginForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const url = 'https://first-node-js-app-r.herokuapp.com/api/auth/login';
    const result = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    });
    const data = await result.json();
    const token = data.token;
    localStorage.setItem('token', JSON.stringify(token));
    if (!token) {
      setIsOpen(true);
    } else {
      navigate('/todo');
    }
    localStorage.setItem('login', JSON.stringify(values));
  };
  return (
    <Form
      style={{ width: 400 }}
      name="normal_login"
      className="login-form"
      onFinish={onFinish}
    >
      <Email />
      <Password />
      <Btn />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </Form>
  );
};

export default LoginForm;
