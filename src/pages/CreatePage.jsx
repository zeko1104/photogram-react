import DashboardMenu from "../layouts/DashboardMenu";

const CreatePage = () => {
  return (
    <div className="min-h-screen flex dark:bg-neutral-950 dark:text-white">
      <DashboardMenu />
      <div className="max-w-4xl w-full mx-96 p-6">
        <div className="bg-white p-6 rounded-lg shadow-md ">
          <h2 className="text-2xl font-semibold mb-4">Create a New Post</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Image</label>
              <input
                type="file"
                className="w-full p-2 border rounded-lg focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700">Content</label>
              <textarea
                placeholder="Write something..."
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="5"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Create Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
