import { Link } from 'react-router-dom';
import { Button, Form } from 'antd';
import s from '../../styles.module.css';

const Btn = () => {
  return (
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
  );
};

export default Btn;
