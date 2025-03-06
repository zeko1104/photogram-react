const ChatPage = ({ user }) => {
  if (!user)
    return <div className="text-center text-gray-500">Mesaj seçin</div>;

  return (
    <div className="p-2 border-b border-gray-300 rounded-lg bg-white dark:bg-neutral-950">
      <div className="flex">
        <img
          className="w-10 h-10 rounded-full border border-gray-300 object-cover"
          src={user.image}
          alt=""
        />
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          {user.name}
        </h2>
      </div>
      <div className=""> </div>
    </div>
  );
};

export default ChatPage;
