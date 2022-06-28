import React, { useState, useEffect } from 'react';
import { Layout as AntdLayout, Menu, Space, Typography, Badge, Avatar, Button, Switch } from 'antd';
import { Link, Outlet, Navigate, useNavigate } from 'react-router-dom';
import { BellOutlined, LogoutOutlined, ProfileOutlined, UserOutlined, DashboardOutlined, ShopOutlined, BulbOutlined, BulbFilled } from '@ant-design/icons';
import { Logo } from '../images';
import { useAuth, useCurrentPage } from '../hooks';
import { API } from '../API';

export const Layout = () => {
  const currentPage = useCurrentPage();
  const discordToken = useAuth();

  const [user, setUser] = useState({});
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const navigate = useNavigate();
  const onLogoutHandler = () => {
    localStorage.removeItem('discord_token');
    navigate('login');
  };

  useEffect(() => {
    const fetchUser = async () => {
      setUser(await API.user());
    };

    fetchUser();
  }, []);

  if (!discordToken) {
    return <Navigate to="login" />;
  }

  return (
    <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
      <AntdLayout style={{ minHeight: '100vh' }}>
        <AntdLayout.Header style={{
          color: '#fff',
          display: 'flex',
          justifyContent: 'space-between',
          borderBottom: '1px solid #424242'
        }}>
          <Space size="middle">
            <img src={Logo} alt="logo" width={32} height={24} />
            <Typography.Text strong style={{ color: '#fff', fontSize: 18 }}>
              Личный кабинет
            </Typography.Text>
          </Space>
          <Space size="large">
            <Badge count={11}>
              <Link to="profile">
                <BellOutlined style={{ color: '#fff', fontSize: 25 }} />
              </Link>
            </Badge>
            <Space>
              <Avatar src={user.avatarUrl} size={30} />
              {user.name?.slice(0, user.name.indexOf(' ') + 2)}
            </Space>
            <Switch
              checkedChildren={<BulbOutlined />}
              unCheckedChildren={<BulbFilled />}
              onChange={setIsDarkTheme}
            />
            <Button type="link" onClick={onLogoutHandler} style={{ fontSize: 20, color: '#fff' }}>
              <LogoutOutlined />
            </Button>
          </Space>
        </AntdLayout.Header>
        <AntdLayout>
          <AntdLayout.Sider style={{ boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)' }}>
            <Menu mode="inline" style={{ height: '100%', borderRight: 0 }} selectedKeys={[currentPage]} items={[
              { label: <Link to="/">Рубрики</Link>, key: 'rubrics', icon: <ProfileOutlined /> },
              { label: <Link to="profile">Профиль</Link>, key: 'profile', icon: <UserOutlined /> },
              { label: <Link to="vacation">Отпуск</Link>, key: 'vacation', icon: <DashboardOutlined /> },
              { label: <Link to="shop">Магазин</Link>, key: 'shop', icon: <ShopOutlined /> },
            ]} />
          </AntdLayout.Sider>
          <Outlet />
        </AntdLayout>
      </AntdLayout>
    </div>
  );
};
