import { Button, Checkbox, Form, Input } from 'antd';
import '../estilos/LoginStyle.css';
import { Link } from 'react-router-dom';
import { Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import MenuBarUser  from './MenuBarUser';
import Footer from './FooterPage';

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const Login = () => (
    <div>
    <MenuBarUser />
    <div className='login-container'>
      <div className='form-login'>
        <h2>Login</h2>
        <Form
            name="basic"
            labelCol={{
            span: 8,
            }}
            wrapperCol={{
            span: 16,
            }}
            style={{
            maxWidth: 600,
            }}
            initialValues={{
            remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item className='input-container'
            label="Usuario"
            name="username"
            rules={[
                {
                required: true,
                message: 'Please input your username!',
                },
            ]}
            >
            <Input />
            </Form.Item>

            <Form.Item className='input-container'
            label="Contraseña"
            name="password"
            rules={[
                {
                required: true,
                message: 'Please input your password!',
                },
            ]}
            >
            <Input.Password />
            </Form.Item>

            <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
                offset: 8,
                span: 16,
            }}
            >
            <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
            wrapperCol={{
                offset: 8,
                span: 16,
            }}
            >
            <Button type="primary" htmlType="submit">
                Entrar
            </Button>
            <Link to={'/'}>
            <Button type="dashed" htmlType="reset">
                Cancelar
            </Button>
            </Link>
            </Form.Item>
        </Form>
        <div className='new-account-container'>
            <Space>
            <PlusOutlined />
            <Link to={'/FormRegister'}> <a href=''> Create a new account </a></Link>
            </Space>
        </div>
      </div>
  </div>
  <div className='footer'>
      <Footer />
      </div>
  </div>
);
export default Login;