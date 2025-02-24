import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import ExplorePage from "../pages/ExplorePage";
import CreatePage from "../pages/CreatePage";



const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/create" element={<CreatePage />} />
    </Routes>
  );
};

export default AppRoute;
