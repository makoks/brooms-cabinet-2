import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { LoginPage, RegisterPage, RubricsPage, NewsPage, EventsPage, IdeasPage, ProfilePage, VacationPage, ShopPage } from './pages';
import { Layout } from './components';
import 'antd/dist/antd.css';
// import './App.css';
// import your route components too

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route element={<Layout />}>
          <Route path="/" element={<RubricsPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="ideas" element={<IdeasPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="vacation" element={<VacationPage />} />
          <Route path="shop" element={<ShopPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
