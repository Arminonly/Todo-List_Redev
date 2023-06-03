import React from 'react';
import { Form, Select } from 'antd';

const Gender = () => {
  return (
    <>
      <Form.Item
        name="gender"
        label="gender"
        rules={[
          {
            required: true
          }
        ]}
      >
        <Select placeholder="select your gender">
          <Select.Option value={'male'}>Male</Select.Option>
          <Select.Option value={'female'}>Female</Select.Option>
        </Select>
      </Form.Item>
    </>
  );
};

export default Gender;
