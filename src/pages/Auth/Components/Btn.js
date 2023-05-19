import { Button, Form } from 'antd';
import { Link} from 'react-router-dom';
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

const Btn = ({onReset}) => {
  return (
    <>
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
    </>
  )
}

export default Btn
