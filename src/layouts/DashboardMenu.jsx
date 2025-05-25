import { FaHome, FaVideo, FaRegHeart, FaRegSave } from "react-icons/fa";
import { IoSearchSharp, IoSettingsOutline } from "react-icons/io5";
import {
  MdOutlineExplore,
  MdChatBubbleOutline,
  MdOutlineCreate,
  MdLogout,
} from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import img from "../assets/images/profile-removebg-preview.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "../components/Modal";
import DarkModeToggle from "../components/ToggleButton";

const DashboardMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchModal, setSearchModal] = useState(false);

  return (
    <div
      className="sm:w-64 sm:h-full sm:fixed sm:left-0 sm:top-0 sm:p-6 sm:border-r sm:border-gray-300 
      sm:bg-white sm:dark:bg-neutral-950 sm:z-50 
      w-full h-20 fixed bottom-0 left-0 bg-white dark:bg-neutral-950 
      flex sm:block justify-around items-center border-gray-300 z-50 "
    >
      {/* Logo (desktop only) */}
      <div className="mb-6 hidden sm:block">
        <h1 className="text-2xl font-bold dark:text-white text-gray-800 font-serif">
          Photogram
        </h1>
      </div>

      {/* Menu */}
      <ul className="sm:space-y-1 flex sm:flex-col gap-4 sm:gap-0">
        {/* Home */}
        <Link className="sm:inline" to="/">
          <li className="dark:hover:text-black  flex items-center justify-center sm:justify-start gap-1 sm:gap-3 text-lg text-black dark:text-white hover:bg-gray-100 p-2 sm:p-3 rounded-lg cursor-pointer">
            <FaHome className="text-xl " />
            <span className="hidden sm:inline">Home</span>
          </li>
        </Link>

        {/* Search */}
        <Link className="sm:inline" onClick={() => setSearchModal(true)}>
          <li className="dark:hover:text-black flex items-center justify-center sm:justify-start gap-1 sm:gap-3 text-lg text-black dark:text-white hover:bg-gray-100 p-2 sm:p-3 rounded-lg cursor-pointer">
            <IoSearchSharp className="text-xl" />
            <span className="hidden sm:inline">Search</span>
          </li>
        </Link>

        {/* Explore */}
        <Link className="sm:inline" to="/explore">
          <li className="dark:hover:text-black flex items-center justify-center sm:justify-start gap-1 sm:gap-3 text-lg text-black dark:text-white hover:bg-gray-100 p-2 sm:p-3 rounded-lg cursor-pointer">
            <MdOutlineExplore className="text-xl" />
            <span className="hidden sm:inline">Explore</span>
          </li>
        </Link>

        {/* Reels */}
        <Link className="sm:inline" to="/reels">
          <li className="dark:hover:text-black flex items-center justify-center sm:justify-start gap-1 sm:gap-3 text-lg text-black dark:text-white hover:bg-gray-100 p-2 sm:p-3 rounded-lg cursor-pointer">
            <FaVideo className="text-xl" />
            <span className="hidden sm:inline">Reels</span>
          </li>
        </Link>

        {/* Messages */}
        <Link className="sm:inline" to="/messages">
          <li className="dark:hover:text-black flex items-center justify-center sm:justify-start gap-1 sm:gap-3 text-lg text-black dark:text-white hover:bg-gray-100 p-2 sm:p-3 rounded-lg cursor-pointer">
            <MdChatBubbleOutline className="text-xl" />
            <span className="hidden sm:inline">Messages</span>
          </li>
        </Link>

        {/* Notifications (desktop only) */}
        <Link className="max-sm:hidden" to="/notifications">
          <li className="dark:hover:text-black hidden sm:flex items-center gap-3 text-lg text-black dark:text-white hover:bg-gray-100 p-3 rounded-lg cursor-pointer">
            <FaRegHeart className="text-xl" />
            <span className="hidden sm:inline">Notifications</span>
          </li>
        </Link>

        {/* Create (desktop only) */}
        <Link className="max-sm:hidden" to="/create">
          <li className="dark:hover:text-black hidden sm:flex items-center gap-3 text-lg text-black dark:text-white hover:bg-gray-100 p-3 rounded-lg cursor-pointer">
            <MdOutlineCreate className="text-xl" />
            <span className="hidden sm:inline">Create</span>
          </li>
        </Link>

        {/* Profile */}
        <Link className="sm:inline" to="/profile">
          <li className="dark:hover:text-black flex items-center justify-center sm:justify-start gap-1 sm:gap-3 text-lg text-black dark:text-white hover:bg-gray-100 p-2 sm:p-3 rounded-lg cursor-pointer">
            <img src={img} alt="Profile" className="w-8 h-8 rounded-full" />
            <span className="hidden sm:inline">Profile</span>
          </li>
        </Link>

        {/* More button */}
        <li className="dark:hover:text-white sm:hidden flex items-center justify-center text-lg text-black dark:text-white cursor-pointer">
          <button onClick={() => setIsModalOpen(true)}>
            <RxHamburgerMenu className="text-xl" />
          </button>
        </li>

        <li className="dark:hover:text-black hidden sm:flex items-center gap-3 text-lg text-black dark:text-white hover:bg-gray-100 p-3 rounded-lg cursor-pointer">
          <RxHamburgerMenu />
          <button onClick={() => setIsModalOpen(true)}>More</button>
        </li>
      </ul>

      {/* Modal for More options */}
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
            <DarkModeToggle />
          </li>
          <li className="flex items-center gap-3 text-red-500 hover:text-red-600 cursor-pointer">
            <MdLogout className="text-xl" />
            <button>Logout</button>
          </li>
        </ul>
      </Modal>

      <Modal isOpen={searchModal} onClose={() => setSearchModal(false)}>
        <div className="">
          <div className="">
            <h1 className="text-2xl font-bold dark:text-white text-gray-800  mb-4">
              Search
            </h1>
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 border border-gray-300 rounded-lg dark:bg-neutral-800 dark:text-white"
            />
          </div>
          <div className="">
            <ul>
              <li className="mt-4">
                <Link
                  to="/search/users"
                  className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-500"
                >
                  <div className="flex items-center gap-3 ">
                    <img
                      src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="User 1"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <h1>User 1</h1>
                  </div>
                </Link>
              </li>
               <li className="mt-4">
                <Link
                  to="/search/users"
                  className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-500"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="User 1"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <h1>User 1</h1>
                  </div>
                </Link>
              </li>
              <li className="mt-4">
                <Link
                  to="/search/users"
                  className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-500"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="User 1"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <h1>User 1</h1>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DashboardMenu;
