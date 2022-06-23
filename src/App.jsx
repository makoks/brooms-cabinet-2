import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { LoginPage, RubricsPage, ProfilePage, VacationPage, ShopPage } from './pages';
import { Layout } from './components';
import 'antd/dist/antd.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route element={<Layout />}>
          <Route path="/" element={<RubricsPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="vacation" element={<VacationPage />} />
          <Route path="shop" element={<ShopPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
