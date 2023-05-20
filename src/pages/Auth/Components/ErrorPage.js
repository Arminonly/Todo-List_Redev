import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
      <Result
        status="500"
        subTitle="Похоже-такой пользователь или email уже существуют."
        extra={
          <Link to={'/registry'}>
            <Button type="primary">Попытайся снова</Button>
          </Link>
        }
      />
    </>
  );
};

export default ErrorPage;
