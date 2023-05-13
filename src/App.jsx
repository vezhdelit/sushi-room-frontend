import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchAuth } from './redux/slices/authSlice';

import TopLine from './layout/TopLine/TopLine';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';

import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import ItemInfo from './pages/ItemInfo/ItemInfo';
import NotFound from './pages/NotFound/NotFound';

import Login from './pages/Authentication/Login/Login';
import Registration from './pages/Authentication/Registration/Registration';
import Profile from './pages/Authentication/Profile/Profile';
import MapPage from './pages/MapPage/MapPage';

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (window.localStorage.getItem('token')) {
      dispatch(fetchAuth());
    }
  }, []);

  return (
    <>
      <TopLine />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/item/:_id" element={<ItemInfo />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
