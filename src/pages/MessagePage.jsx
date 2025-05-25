import DashboardMenu from "../layouts/DashboardMenu";
import { IoSearchSharp } from "react-icons/io5";
import { useState } from "react";
import ChatPage from "./ChatPage";
import { MdChatBubbleOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const users = [
  {
    id: 1,
    name: "John Doe",
    image:
      "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    name: "Jane Smith",
    image:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    name: "Alex Brown",
    image:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    name: "Emily White",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const MessagePage = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="flex h-screen dark:bg-neutral-950">
      {/* Sol menyu */}
      <DashboardMenu />

      {/* Ortada Chat bölməsi */}
      <div className="flex flex-1 h-full max-sm:hidden">
        {selectedUser ? (
          <ChatPage user={selectedUser} className="flex-1 h-full" />
        ) : (
          <div className="flex flex-col items-center justify-center flex-1 h-full">
            <MdChatBubbleOutline className="text-6xl text-gray-400 dark:text-gray-300" />
            <h1 className="text-gray-800 dark:text-gray-100 font-semibold mt-2">
              Your messages
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Send a message to start a chat.
            </p>
          </div>
        )}
      </div>

      {/* Sağ tərəfdə mesaj siyahısı */}
      <div className="w-80 border-l border-gray-300 bg-white dark:bg-neutral-950 p-4 overflow-auto">
        <div className="flex items-center gap-3 mb-6 bg-gray-100 dark:bg-neutral-800 p-2 rounded-lg">
          <input
            placeholder="Search..."
            type="text"
            className="border w-full h-9 rounded-xl px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-900 dark:border-gray-700 dark:text-white"
          />
          <button className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
            <IoSearchSharp className="text-2xl" />
          </button>
        </div>

        <h1 className="font-semibold text-gray-700 dark:text-gray-300 mb-4">
          Messages
        </h1>
        <ul className="space-y-3">
          {users.map((user) => (
            <li
              key={user.id}
              className="flex items-center gap-3 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-800 p-2 rounded-lg cursor-pointer transition"
              onClick={() => {
                if (window.innerWidth > 640) {
                  // Desktop
                  setSelectedUser(user);
                }
              }}
            >
              <Link
                className="flex items-center gap-3 w-full"
              >
                <img
                  src={user.image}
                  alt="Profile"
                  className="w-10 h-10 rounded-full border border-gray-300 object-cover"
                />
                <h1 className="dark:text-white text-black font-medium">
                  {user.name}
                </h1>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MessagePage;
