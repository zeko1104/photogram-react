import { FaHome } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineExplore, MdChatBubbleOutline, MdOutlineCreate } from "react-icons/md";
import { FaVideo, FaRegHeart } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import img from '../assets/images/profile-removebg-preview.png'
import { Link } from "react-router-dom";

const DashboardMenu = () => {
  return (
    <div className="w-64 h-full fixed left-0 top-0 p-6 border-r border-gray-300 bg-white">
      {/* Logo */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 font-serif">Photogram</h1>
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
          <img
            src={img}
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <Link to="/profile">Profile</Link>
        </li>
        <li className="flex items-center gap-3 text-lg text-black hover:bg-gray-100 p-3 rounded-lg cursor-pointer">
          <RxHamburgerMenu />
          <Link to="/more">More</Link>
        </li>
      </ul>
    </div>
  );
};

export default DashboardMenu;
