import React from 'react';
import { Form, Radio, Select } from 'antd';

const IsMan = () => {
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

export default IsMan;
