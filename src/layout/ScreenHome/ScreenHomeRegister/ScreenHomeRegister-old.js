import React from 'react'
import { Form, Input, Button } from 'antd'
import './ScreenHomeRegister.scss'
const MyFormItemContext = React.createContext([])
function toArr(str) {
  return Array.isArray(str) ? str : [str]
}
const MyFormItemGroup = ({ prefix, children }) => {
  const prefixPath = React.useContext(MyFormItemContext)
  const concatPath = React.useMemo(() => [...prefixPath, ...toArr(prefix)], [prefixPath, prefix])
  return <MyFormItemContext.Provider value={concatPath}>{children}</MyFormItemContext.Provider>
}
const MyFormItem = ({ name, ...props }) => {
  const prefixPath = React.useContext(MyFormItemContext)
  const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined
  return <Form.Item name={concatName} {...props} />
}

const App = () => {
  const onFinish = (value) => {
    console.log(value)
  }
  return (
    <div className='ScreenHomeRegister'>
      <Form name='form_item_path' layout='vertical' onFinish={onFinish}>
        <MyFormItemGroup prefix={['user']}>
          <MyFormItemGroup prefix={['name']}>
            <MyFormItem name='firstName' label='First Name' className='ScreenHomeRegister__titleInput'>
              <Input />
            </MyFormItem>
            <MyFormItem name='lastName' label='Last Name' className='ScreenHomeRegister__titleInput'>
              <Input />
            </MyFormItem>
          </MyFormItemGroup>

          <MyFormItem name='age' label='Age'>
            <Input />
          </MyFormItem>
        </MyFormItemGroup>

        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form>
    </div>
  )
}
export default App
