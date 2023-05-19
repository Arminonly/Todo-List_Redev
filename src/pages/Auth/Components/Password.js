import { Form, Input} from 'antd';

const Password = () => {
  return (
    <>
       <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
              whitespace: true
            },
            { min: 8 }
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
    </>
  )
}

export default Password
