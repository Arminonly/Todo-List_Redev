import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Col, Form, Input, InputNumber, Row, Radio } from 'antd';

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
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 8
    }
  }
};

export default function Registry() {
  const navigate = useNavigate();
  const [value, setValue] = useState(true);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onFinish = async (values) => {
    const url = 'https://first-node-js-app-r.herokuapp.com/api/users/register';
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
      <h1>Registry</h1>
      <Row wrap={false}>
        <Col flex="auto">
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
            <Form.Item
              name="username"
              label="Username"
              tooltip="What do you want others to call you?"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                  whitespace: true
                }
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!'
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                  whitespace: true
                }
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                  whitespace: true
                },
                { min: 8 }
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="isMan"
              label="isMan"
              rules={[
                {
                  required: true
                }
              ]}
            >
              <Radio.Group onChange={onChange} value={value}>
                <Radio value={false}>male</Radio>
                <Radio value={true}>female</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name="age"
              label="Age"
              rules={[
                {
                  required: true,
                  message: 'Please input your age!'
                }
              ]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
              <span>&nbsp;</span>
              <span>&nbsp;</span>
              <span>&nbsp;</span>
              <Button htmlType="button" onClick={onReset}>
                Очистить
              </Button>
              <span>&nbsp;</span>{' '}
              <p>
                back to <Link to="/">Log in</Link>
              </p>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
}
