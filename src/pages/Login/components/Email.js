import { Form, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import s from '../../styles.module.css';

const Email = () => {
  return (
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
  );
};

export default Email;
