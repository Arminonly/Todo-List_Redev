import { Typography} from 'antd';
import s from '../styles.module.css';
import LoginForm from './components/LoginForm';


const LoginPage = () => {
  return (
    <div>
      <Typography.Title className={s.title}>Вход</Typography.Title>
      <LoginForm/>
    </div>
  );
};

export default LoginPage;
