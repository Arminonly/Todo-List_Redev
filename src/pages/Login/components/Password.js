import { Form, Input } from 'antd';
import { LockFilled } from '@ant-design/icons';
import s from '../../styles.module.css';

const Password = () => {
  return (
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
  );
};

export default Password;
