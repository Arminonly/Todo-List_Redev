import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import s from '../styles.module.css';

const ExitBtn = () => {
  return (
    <Link to={'/'}>
      <Button
        className={s.exit}
        size="large"
        icon={<LoginOutlined />}
        danger
        type="primary"
      >
        Exit
      </Button>
    </Link>
  );
};

export default ExitBtn;
