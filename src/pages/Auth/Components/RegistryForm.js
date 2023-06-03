import { useNavigate } from 'react-router-dom';
import { Form } from 'antd';
import UserName from './UserName';
import Email from './Email';
import Password from './Password';
import AgeInput from './AgeInput';
import Btn from './Btn';
import Gender from './Gender';

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
  const onFinish = async (values) => {
    const url = process.env.REACT_APP_REGISTRY;
    const result = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    });
    const data = await result.json();
    if (!data.id) {
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
        <UserName />
        <Email />
        <Password />
        <Gender />
        <AgeInput />
        <Btn onReset={onReset} />
      </Form>
    </>
  );
};

export default RegistryForm;
