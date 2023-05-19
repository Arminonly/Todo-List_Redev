import React from 'react'
import {Form, Radio } from 'antd';


const IsMan = ({value,onChange}) => {
   
  return (
    <>
          <Form.Item
          name="isMan"
          label="isMan"
          rules={[
            {
              required: true
            }
          ]}
        >
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={false}>male</Radio>
            <Radio value={true}>female</Radio>
          </Radio.Group>
        </Form.Item> 
    </>
  )
}

export default IsMan
