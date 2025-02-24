import { FaHome } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegSave } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { FaToggleOff } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import {
  MdOutlineExplore,
  MdChatBubbleOutline,
  MdOutlineCreate,
} from "react-icons/md";
import { FaVideo, FaRegHeart } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import img from "../assets/images/profile-removebg-preview.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "../components/Modal";




const DashboardMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="w-64 h-full fixed left-0 top-0 p-6 border-r border-gray-300 bg-white z-50">
      {/* Logo */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 font-serif">
          Photogram
        </h1>
      </div>
      {/* Menü */}
      <ul className="space-y-1">
        <li className="flex items-center gap-3 text-lg text-black hover:bg-gray-100 p-3 rounded-lg cursor-pointer">
          <FaHome />
          <Link to="/">Home</Link>
        </li>
        <li className="flex items-center gap-3 text-lg text-black hover:bg-gray-100 p-3 rounded-lg cursor-pointer">
          <IoSearchSharp />
          <Link to="/search">Search</Link>
        </li>
        <li className="flex items-center gap-3 text-lg text-black hover:bg-gray-100 p-3 rounded-lg cursor-pointer">
          <MdOutlineExplore />
          <Link to="/explore">Explore</Link>
        </li>
        <li className="flex items-center gap-3 text-lg text-black hover:bg-gray-100 p-3 rounded-lg cursor-pointer">
          <FaVideo />
          <Link to="/reels">Reels</Link>
        </li>
        <li className="flex items-center gap-3 text-lg text-black hover:bg-gray-100 p-3 rounded-lg cursor-pointer">
          <MdChatBubbleOutline />
          <Link to="/messages">Messages</Link>
        </li>
        <li className="flex items-center gap-3 text-lg text-black hover:bg-gray-100 p-3 rounded-lg cursor-pointer">
          <FaRegHeart />
          <Link to="/notifications">Notifications</Link>
        </li>
        <li className="flex items-center gap-3 text-lg text-black hover:bg-gray-100 p-3 rounded-lg cursor-pointer">
          <MdOutlineCreate />
          <Link to="/create">Create</Link>
        </li>
        <li className="flex items-center gap-3 text-lg text-black hover:bg-gray-100 p-3 rounded-lg cursor-pointer">
          <img src={img} alt="Profile" className="w-8 h-8 rounded-full" />
          <Link to="/profile">Profile</Link>
        </li>
        <li className="flex items-center gap-3 text-lg text-black hover:bg-gray-100 p-3 rounded-lg cursor-pointer">
          <RxHamburgerMenu />
          <button onClick={() => setIsModalOpen(true)}>More</button>
        </li>
      </ul>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ul className="space-y-4">
          <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-500">
            <IoSettingsOutline className="text-xl" />
            <Link to="/settings">Settings</Link>
          </li>
          <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-500">
            <FaRegSave className="text-xl" />
            <Link to="/saved">Saved</Link>
          </li>
          <li className="flex items-center justify-between text-gray-700 dark:text-gray-300 hover:text-blue-500">
            <div className="flex items-center gap-3">
              <IoSunnyOutline className="text-xl" />
              <span>Dark Mode</span>
            </div>
            <FaToggleOff className="text-xl cursor-pointer" />
          </li>
          <li className="flex items-center gap-3 text-red-500 hover:text-red-600 cursor-pointer">
            <MdLogout className="text-xl" />
            <button>Logout</button>
          </li>
        </ul>
      </Modal>
    </div>
  );
};

export default DashboardMenu;
