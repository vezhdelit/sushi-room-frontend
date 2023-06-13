import React from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAuth } from "./redux/slices/authSlice";

import TopLine from "./layout/TopLine/TopLine";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";

import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import FullItem from "./pages/FullItem/FullItem";
import NotFound from "./pages/NotFound/NotFound";
import Success from "./pages/Success/Success";

import Admin from "./pages/Admin/Admin";
import AddItem from "./pages/AddItem/AddItem";
import EditItem from "./pages/EditItem/EditItem";

import Login from "./pages/Authentication/Login/Login";
import Registration from "./pages/Authentication/Registration/Registration";
import Profile from "./pages/Authentication/Profile/Profile";
import MapPage from "./pages/MapPage/MapPage";

const App = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (window.localStorage.getItem("token")) {
      dispatch(fetchAuth());
    }
  }, []);

  return (
    <>
      <TopLine />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:_id" element={<FullItem />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/success" element={<Success />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/additem" element={<AddItem />} />
        <Route path="/admin/edititem/:_id" element={<EditItem />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
