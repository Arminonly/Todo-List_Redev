import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, Input, Typography, Modal } from 'antd';
import {
  UserOutlined,
  LockFilled,
  CloseCircleOutlined
} from '@ant-design/icons';
import s from '../styles.module.css';
import LoginForm from './LoginForm';

const LoginPage = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const navigate = useNavigate();
  // const onFinish = async values => {
  //   const url = 'https://first-node-js-app-r.herokuapp.com/api/auth/login';
  //   const result = await fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(values)
  //   });
  //   const data = await result.json();
  //   const token = data.token;
  //   localStorage.setItem('token', JSON.stringify(token));
  //   if (!token) {
  //     setIsOpen(true);
  //   } else {
  //     navigate('/todo');
  //   }
  //   localStorage.setItem('login', JSON.stringify(values));
  // };
  return (
    <div>
      <Typography.Title className={s.title}>Вход</Typography.Title>
      {/* <Form
        style={{ width: 400 }}
        name="normal_login"
        className="login-form"
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Пожалуйста, введите логин'
            }
          ]}
        >
          <Input
            className={s.input}
            placeholder="email"
            prefix={<UserOutlined className="site-form-item-icon" />}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Пожалуйста, введите пароль'
            }
          ]}
        >
          <Input
            className={s.input}
            prefix={<LockFilled className="site-form-item-icon" />}
            type="password"
            placeholder="Пароль"
          />
        </Form.Item>
        <Form.Item>
          <Button
            block
            style={{
              marginBottom: '10px'
            }}
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or &nbsp;
          <Link className={s.a} to="/registry">
            register now!
          </Link>
        </Form.Item>
        <Modal
          open={isOpen}
          closable="false"
          centered
          cancelText="Отмена"
          closeIcon={<CloseCircleOutlined className={s.closeIcon} />}
          onCancel={() => {
            setIsOpen(false);
          }}
          onOk={() => navigate('/registry')}
        >
          {' '}<h3>Сначала зарегистрируйтесь</h3>
        </Modal>
      </Form> */}
      <LoginForm />
    </div>
  );
};

export default LoginPage;
