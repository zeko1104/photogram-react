import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import ExplorePage from "../pages/ExplorePage";
import CreatePage from "../pages/CreatePage";
import MessagePage from "../pages/MessagePage";
import ChatPage from "../pages/ChatPage";



const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/messages" element={<MessagePage />} />
      <Route path="/chatpage" element={<ChatPage/>} />
    </Routes>
  );
};

export default AppRoute;
