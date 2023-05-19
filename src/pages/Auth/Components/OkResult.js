import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

const OkResult = () => {
  return (
    <>
      <Result
        status="success"
        title="Поздравляем с успешной регистрацией"
        subTitle="Теперь перейдите на страницу 'Логин и пароль'."
        extra={[
          <Link to={'/'}>
            {' '}
            <Button type="primary" key="console">
              Перейти
            </Button>
          </Link>
        ]}
      />
    </>
  );
};

export default OkResult;
