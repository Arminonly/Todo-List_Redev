import { Form, InputNumber } from 'antd';

const AgeInput = () => {
  return (
    <>
        <Form.Item
          name="age"
          label="Age"
          rules={[
            {
              required: true,
              message: 'Please input your age!'
            }
          ]}
        >
          <InputNumber />
        </Form.Item>
    </>
  )
}

export default AgeInput
