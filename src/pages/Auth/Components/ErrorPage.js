import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
      <Result
        status="500"
        subTitle="Sorry, something went wrong."
        extra={
          <Link to={'/registry'}>
            <Button type="primary">Try again</Button>
          </Link>
        }
      />
    </>
  );
};

export default ErrorPage;
