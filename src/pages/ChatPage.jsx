import { CiMicrophoneOn, CiImageOn, CiHeart } from "react-icons/ci";
import { BsEmojiSmile } from "react-icons/bs";
import { PiStickerLight } from "react-icons/pi";
import { useParams } from "react-router-dom";

const ChatPage = ({ user }) => {
  const { userId } = useParams();

  const selectedUser = user || users.find((u) => u.id.toString() === userId);

  if (!user)
    return <div className="text-center text-gray-500">Mesaj seçin</div>;

  if (!selectedUser)
    return (
      <div className="text-center text-gray-500">No User Found</div>
    );

  return (
    <div className="flex-1 flex flex-col relative sm:ml-64">
      {/* Header */}
      <div className="p-2 w-full border-b border-gray-300 bg-white dark:bg-neutral-950 flex items-center">
        <img
          className="w-12 h-12 rounded-full border border-gray-300 object-cover"
          src={user.image}
          alt="User profile"
        />
        <h2 className="text-lg m-2 font-semibold text-gray-900 dark:text-white">
          {user.name}
        </h2>
      </div>

      {/* Chat Content */}
      <div className="flex-1 dark:bg-neutral-950 p-4 overflow-auto">
        {/* Mesajlar */}
      </div>

      {/* Input Section */}
      <div className="p-3 w-full bg-white dark:bg-neutral-950 border-t border-gray-300 flex items-center gap-3">
        <BsEmojiSmile className=" dark:text-white text-2xl cursor-pointer" />
        <input
          className="flex-1 border border-gray-300 rounded-full px-4 py-2 outline-none dark:bg-neutral-950 dark:text-white"
          type="text"
          placeholder="Mesaj yaz..."
        />
        <div className="flex items-center gap-2  dark:text-white">
          <CiImageOn className="text-2xl cursor-pointer" />
          <PiStickerLight className="text-2xl cursor-pointer" />
          <CiMicrophoneOn className="text-2xl cursor-pointer" />
          <CiHeart className="text-2xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
