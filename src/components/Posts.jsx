import { SlOptions } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaRegSave } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import img from "../assets/images/profile-removebg-preview.png";

const Posts = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 max-w-md mx-auto">
      {/* Post Title */}
      <div className="flex justify-between items-center border-b pb-2">
        <div className="flex items-center space-x-2">
          <img src={img} alt="Profile" className="w-10 h-10 rounded-full bg-gray-300" />
          <h1 className="font-semibold">Zeko</h1>
        </div>
        <div className="flex items-center space-x-2 text-gray-500">
          <h2 className="text-sm">44m</h2>
          <SlOptions className="cursor-pointer" />
        </div>
      </div>
      {/* Post Content */}
      <div className="my-3">
        <img src='https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=600' alt="Post" className="w-full h-64 object-cover bg-gray-200 rounded-md" />
      </div>
      {/* Icons */}
      <div className="flex justify-between items-center py-2 border-b">
        <div className="flex space-x-4 text-gray-600 text-xl">
          <FaRegHeart className="cursor-pointer hover:text-red-500" />
          <IoChatbubbleEllipsesOutline className="cursor-pointer hover:text-blue-500" />
          <FiSend className="cursor-pointer hover:text-yellow-500" />
        </div>
        <div className="text-gray-600 text-xl">
          <FaRegSave className="cursor-pointer hover:text-green-500" />
        </div>
      </div>
      {/* Post Description */}
      <div className="py-2">
        <p className="text-gray-800 text-sm">Bu, nümunə bir post açıqlamasıdır. Burada post haqqında məlumat yazıla bilər.</p>
      </div>
      {/* Comment Count */}
      <div className="text-gray-600 text-sm py-2 border-b">14 Comments</div>
      {/* Comment Input */}
      <div className="flex items-center space-x-2 pt-2">
        <img src={img} alt="Profile" className="w-8 h-8 rounded-full bg-gray-300" />
        <input 
          type="text" 
          placeholder="Write a comment..." 
          className="w-full border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
        />
      </div>
    </div>
  );
};

export default Posts;