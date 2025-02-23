import { IoSettingsOutline } from "react-icons/io5";
import { BsFillSignpostSplitFill } from "react-icons/bs";
import { FaRegSave, FaUserTag } from "react-icons/fa";
import DashboardMenu from "../layouts/DashboardMenu";
import img from "../assets/images/profile-removebg-preview.png";

const Profile = () => {
  return (
    <div className="min-h-screen ">
      <DashboardMenu />
      <div className="max-w-4xl ml-80 p-6">
        {/* Profile Header */}
        <div className="flex items-center space-x-6 bg-white p-6 rounded-lg shadow-md">
          <div className="">
            <img src={img} className="w-24 h-24 rounded-full" alt="" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Zeko</h2>
            <div className="flex items-center space-x-4 mt-2">
              <button className="px-4 py-2 bg-gray-300 text-black rounded-md hover:opacity-80">
                Edit Profile
              </button>
              <button className="px-4 py-2 bg-gray-300 text-black rounded-md hover:opacity-80">
                View Archive
              </button>
              <IoSettingsOutline className="text-2xl cursor-pointer" />
            </div>
          </div>
        </div>
        {/* Profile Stats */}
        <div className="flex justify-around mt-6 bg-white p-4 rounded-lg shadow-md">
          <p className="text-center">
            <span className="font-bold">0</span> posts
          </p>
          <p className="text-center">
            <span className="font-bold">0</span> followers
          </p>
          <p className="text-center">
            <span className="font-bold">0</span> following
          </p>
        </div>
        {/* Story Highlights */}
        <div className="flex justify-center mt-6">
          <div className="w-20 h-20 rounded-full border-2 border-blue-500 flex items-center justify-center bg-gray-300">
            <h1 className="text-sm font-semibold">New</h1>
          </div>
        </div>
        {/* Profile Tabs */}
        <div className="flex justify-center space-x-6 mt-6 border-t pt-4">
          <button className="flex items-center space-x-2 text-gray-600 hover:text-black">
            <BsFillSignpostSplitFill className="text-xl" />
            <h2 className="text-lg font-medium">POSTS</h2>
          </button>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-black">
            <FaRegSave className="text-xl" />
            <h2 className="text-lg font-medium">SAVED</h2>
          </button>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-black">
            <FaUserTag className="text-xl" />
            <h2 className="text-lg font-medium">TAGGED</h2>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
