import { IoSettingsOutline } from "react-icons/io5";
import { BsFillSignpostSplitFill } from "react-icons/bs";
import { FaRegSave, FaUserTag } from "react-icons/fa";
import DashboardMenu from "../layouts/DashboardMenu";
import img from "../assets/images/profile-removebg-preview.png";
import Modal from "../components/Modal";
import { useState } from "react";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="min-h-screen dark:bg-neutral-950 flex flex-col sm:flex-row">
        {/* Sol menyu (yalnız geniş ekranda görünür) */}
        <div className="">
          <DashboardMenu />
        </div>

        <div className="flex-1 w-full sm:ml-80 p-4 sm:p-6">
          {/* Profil başlığı */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-6 bg-white p-4 sm:p-6 rounded-lg shadow-md dark:bg-neutral-900">
            <img
              src={img}
              className="w-24 h-24 rounded-full mb-4 sm:mb-0"
              alt="profile"
            />
            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-semibold dark:text-white">Zeko</h2>
              <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2 mt-3">
                <button
                  onClick={() => setIsOpen(true)}
                  className="px-4 py-1 bg-gray-300 text-black rounded-md hover:opacity-80 dark:bg-neutral-700 dark:text-white"
                >
                  Edit Profile
                </button>
                <button className="px-4 py-1 bg-gray-300 text-black rounded-md hover:opacity-80 dark:bg-neutral-700 dark:text-white">
                  View Archive
                </button>
                <IoSettingsOutline className="text-2xl text-gray-600 dark:text-white cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Statistika */}
          <div className="flex justify-around text-center mt-6 bg-white p-4 rounded-lg shadow-md dark:bg-neutral-900 dark:text-white">
            <p>
              <span className="font-bold">0</span> posts
            </p>
            <p>
              <span className="font-bold">0</span> followers
            </p>
            <p>
              <span className="font-bold">0</span> following
            </p>
          </div>

          {/* Story Highlights */}
          <div className="flex justify-center mt-6">
            <div className="w-20 h-20 rounded-full border-2 border-blue-500 flex items-center justify-center bg-gray-300 dark:bg-neutral-700">
              <h1 className="text-sm font-semibold dark:text-white">New</h1>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex justify-center flex-wrap gap-4 mt-6 border-t pt-4 dark:border-neutral-700">
            <button className="flex items-center space-x-2 text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white">
              <BsFillSignpostSplitFill className="text-xl" />
              <h2 className="text-lg font-medium">POSTS</h2>
            </button>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white">
              <FaRegSave className="text-xl" />
              <h2 className="text-lg font-medium">SAVED</h2>
            </button>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white">
              <FaUserTag className="text-xl" />
              <h2 className="text-lg font-medium">TAGGED</h2>
            </button>
          </div>

          {/* Posts Section */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold dark:text-white mb-4">
              Posts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Placeholder for posts */}
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-200 dark:bg-neutral-800 h-48 rounded-lg flex items-center justify-center"
                >
                  <span className="text-gray-500 dark:text-gray-400">
                    Post {index + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/*Saved Section */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold dark:text-white mb-4">
              Saved
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Placeholder for saved posts */}
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-200 dark:bg-neutral-800 h-48 rounded-lg flex items-center justify-center"
                >
                  <span className="text-gray-500 dark:text-gray-400">
                    Saved Post {index + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tagged Section */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold dark:text-white mb-4">
              Tagged
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Placeholder for tagged posts */}
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-200 dark:bg-neutral-800 h-48 rounded-lg flex items-center justify-center"
                >
                  <span className="text-gray-500 dark:text-gray-400">
                    Tagged Post {index + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">
            Edit Profile
          </h2>
          <form>
            <div className="mb-4">
              <div className="flex justify-center mb-4">
                <img
                  src={img}
                  className="w-24 h-24 rounded-full mb-4 sm:mb-0"
                  alt="profile"
                />
              </div>
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600 dark:text-gray-400">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 focus-within:outline-none"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 dark:text-white">
                Username
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded dark:bg-neutral-800 dark:text-white"
                placeholder="Enter your username"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default Profile;
