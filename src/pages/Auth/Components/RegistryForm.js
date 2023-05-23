import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from 'antd';
import Name from './Name';
import UserName from './UserName';
import Email from './Email';
import Password from './Password';
import IsMan from './IsMan';
import AgeInput from './AgeInput';
import Btn from './Btn';
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 8
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 16
    }
  }
};

const RegistryForm = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(true);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onFinish = async (values) => {
    const url = process.env.REACT_APP_REGISTRY
    const result = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    });
    const data = await result.json();
    if (!data.ID) {
      navigate('/err');
    } else {
      navigate('/ok');
    }
    localStorage.setItem(values, JSON.stringify(values));
  };
  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
  };
  return (
    <>
      <Form
        form={form}
        name="register"
        onFinish={onFinish}
        {...formItemLayout}
        style={{
          maxWidth: 800
        }}
        scrollToFirstError
      >
        <Name />
        <UserName />
        <Email />
        <Password />
        <IsMan value={value} onChange={onChange} />
        <AgeInput />
        <Btn onReset={onReset} />
      </Form>
    </>
  );
};

export default RegistryForm;
