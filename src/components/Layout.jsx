import React from 'react';
import { Layout as AntdLayout, Menu } from 'antd';
import { Link, Outlet, Navigate } from 'react-router-dom';
import { useAuth, useCurrentPage } from '../hooks';

export const Layout = () => {
  const currentPage = useCurrentPage();
  const discordToken = useAuth();

  if (!discordToken) {
    return <Navigate to="login" />;
  }

  return (
    <AntdLayout style={{ minHeight: '100vh' }}>
      <AntdLayout.Header style={{ color: '#fff' }}>Личный кабинет</AntdLayout.Header>
      <AntdLayout>
        <AntdLayout.Sider style={{ boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)' }}>
          <Menu mode="inline" style={{ height: '100%', borderRight: 0 }} selectedKeys={[currentPage]} items={[
            { label: <Link to="/">Рубрики</Link>, key: 'rubrics' },
            { label: <Link to="profile">Профиль</Link>, key: 'profile' },
            { label: <Link to="vacation">Отпуск</Link>, key: 'vacation' },
            { label: <Link to="shop">Магазин</Link>, key: 'shop' },
          ]} />
        </AntdLayout.Sider>
        <Outlet />
      </AntdLayout>
    </AntdLayout>
  );
};
