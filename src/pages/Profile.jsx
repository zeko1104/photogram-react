import { IoSettingsOutline } from "react-icons/io5";
import { BsFillSignpostSplitFill } from "react-icons/bs";
import { FaRegSave, FaUserTag } from "react-icons/fa";
import DashboardMenu from "../layouts/DashboardMenu";
import img from "../assets/images/profile-removebg-preview.png";

const Profile = () => {
  return (
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
              <button className="px-4 py-1 bg-gray-300 text-black rounded-md hover:opacity-80 dark:bg-neutral-700 dark:text-white">
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
      </div>
    </div>
  );
};

export default Profile;
