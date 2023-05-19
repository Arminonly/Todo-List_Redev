import {  Form, Input} from 'antd';

const Email = () => {
  return (
    <>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!'
            },
            {
              required: true,
              message: 'Please input your E-mail!',
              whitespace: true
            }
          ]}
        >
          <Input />
        </Form.Item> 
    </>
  )
}

export default Email
