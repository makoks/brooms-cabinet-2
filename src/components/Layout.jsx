import React from 'react';
import { Layout as AntdLayout, Menu } from 'antd';
import { Link, Outlet } from 'react-router-dom';

export const Layout = () => (
  <AntdLayout style={{ minHeight: '100vh' }}>
    <AntdLayout.Header style={{ color: '#fff' }}>Личный кабинет</AntdLayout.Header>
    <AntdLayout>
      <AntdLayout.Sider style={{ boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)' }}>
        <Menu mode="inline" style={{ height: '100%', borderRight: 0 }} items={[
          { label: <Link to="/">Рубрики</Link>, key: 'rubrics', children: [
            { label: <Link to="news">Новости</Link>, key: 'news' },
            { label: <Link to="events">События</Link>, key: 'events' },
            { label: <Link to="ideas">Идеи</Link>, key: 'ideas' },
          ] },
          { label: <Link to="profile">Профиль</Link>, key: 'profile' },
          { label: <Link to="vacation">Отпуск</Link>, key: 'vacation' },
          { label: <Link to="shop">Магазин</Link>, key: 'shop' },
        ]} />
      </AntdLayout.Sider>
      <Outlet />
    </AntdLayout>
  </AntdLayout>
);
