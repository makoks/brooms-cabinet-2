import React from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

export const LoginForm = () => (
  <Form
    initialValues={{ remember: true }}
    // onFinish={onFinish}
  >
    <Form.Item
      name="username"
      rules={[
        {
          required: true,
          message: 'Пожалуйста, введите Ваш логин!',
        },
      ]}
    >
      <Input prefix={<UserOutlined />} placeholder="Логин" />
    </Form.Item>
    <Form.Item
      name="password"
      rules={[
        {
          required: true,
          message: 'Пожалуйста, введите Ваш пароль!',
        },
      ]}
    >
      <Input
        prefix={<LockOutlined />}
        type="password"
        placeholder="Password"
      />
    </Form.Item>
    <Form.Item style={{ width: '100%' }}>
      <Form.Item name="remember" valuePropName="checked" noStyle>
        <Checkbox>Запомни меня</Checkbox>
      </Form.Item>

      <a
        href="https://discord.com/api/oauth2/authorize?client_id=988933971977076777&redirect_uri=https%3A%2F%2Fbrooms-cabinet-2.netlify.app%2F&response_type=token&scope=identify"
        // href="https://discord.com/api/oauth2/authorize?client_id=988933971977076777&redirect_uri=http%3A%2F%2Flocalhost%3A3000&response_type=token&scope=identify"
        style={{ float: 'right' }}
      >
        Забыли пароль?
      </a>
    </Form.Item>

    <Form.Item>
      <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
        Войти
      </Button>
    </Form.Item>
  </Form>
);
