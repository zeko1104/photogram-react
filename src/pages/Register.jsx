import { useState } from "react";
import { IoLogoFacebook } from "react-icons/io";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-96 p-6 bg-white shadow-md rounded-lg border border-gray-200">
        <h1 className="text-4xl font-bold text-gray-800 font-serif text-center mb-6">
          Photogram
        </h1>
        <button className="flex items-center justify-center space-x-2 w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition">
          <IoLogoFacebook size={20} />
          <p>Log in with Facebook</p>
        </button>
        <div className="flex items-center justify-center my-4">
          <span className="border-t w-1/3"></span>
          <p className="mx-2 text-gray-500 text-sm">OR</p>
          <span className="border-t w-1/3"></span>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-400 text-white py-2 rounded-md font-semibold mt-4 transition"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
