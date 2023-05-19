import React from 'react';
import { Form, Input } from 'antd';

const Name = () => {
  return (
    <Form.Item
      name="name"
      label="Name"
      tooltip="Enter your name"
      rules={[
        {
          required: true,
          message: 'Please input your name!',
          whitespace: true
        }
      ]}
    >
      <Input />
    </Form.Item>
  );
};

export default Name;
