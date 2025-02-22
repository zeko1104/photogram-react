import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";


const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default AppRoute;
