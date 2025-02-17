import img from "../assets/images/profile-removebg-preview.png";

const SuggestMenu = () => {
  return (
    <div className="w-80 min-h-screen fixed right-0 top-0 p-4 text-black border-l border-gray-300 bg-white shadow-lg">
      {/* Profile Section */}
      <div className="flex items-center gap-3 mb-6">
        <img src={img} alt="Profile" className="w-10 h-10 rounded-full" />
        <div className="flex flex-col">
          <h2 className="font-semibold text-gray-800">Zeko</h2>
          <button className="text-blue-500 text-sm hover:underline">
            Switch
          </button>
        </div>
      </div>

      {/* Suggested Section */}
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-semibold text-gray-700">Suggested for you</h4>
        <button className="text-blue-500 text-sm hover:underline">
          See all
        </button>
      </div>

      {/* Suggested User */}
      <div className="">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-3">
            <img
              src="https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Suggested Profile"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h2 className="font-medium text-gray-800">Lorem Ipsum</h2>
              <p className="text-sm text-gray-500">Suggested for you</p>
            </div>
          </div>
          <button className="text-blue-500 text-sm font-semibold hover:text-blue-700">
            Follow
          </button>
        </div>
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-3">
            <img
              src="https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Suggested Profile"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h2 className="font-medium text-gray-800">Lorem Ipsum</h2>
              <p className="text-sm text-gray-500">Suggested for you</p>
            </div>
          </div>
          <button className="text-blue-500 text-sm font-semibold hover:text-blue-700">
            Follow
          </button>
        </div>
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-3">
            <img
              src="https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Suggested Profile"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h2 className="font-medium text-gray-800">Lorem Ipsum</h2>
              <p className="text-sm text-gray-500">Suggested for you</p>
            </div>
          </div>
          <button className="text-blue-500 text-sm font-semibold hover:text-blue-700">
            Follow
          </button>
        </div>
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-3">
            <img
              src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Suggested Profile"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h2 className="font-medium text-gray-800">Lorem Ipsum</h2>
              <p className="text-sm text-gray-500">Suggested for you</p>
            </div>
          </div>
          <button className="text-blue-500 text-sm font-semibold hover:text-blue-700">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuggestMenu;
