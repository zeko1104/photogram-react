import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";


const Login = () => {
  const [loginData,setLoginData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e) =>{
    setLoginData({...loginData,[e.target.name]:e.target.value})
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
  }

  






  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-96 p-6 bg-white shadow-md rounded-lg border border-gray-200">
        <h1 className="text-4xl font-bold text-gray-800 font-serif text-center mb-6">
          Photogram
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            onChange={handleChange}
            value={loginData.email}
            name="email"
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            onChange={handleChange}
            value={loginData.password}
            name="password"
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition">
            Log in
          </button>
        </form>
        <div className="flex items-center justify-center my-4">
          <span className="border-t w-1/3"></span>
          <p className="mx-2 text-gray-500 text-sm">OR</p>
          <span className="border-t w-1/3"></span>
        </div>
        <div className="flex items-center justify-center space-x-2 text-blue-600 font-semibold cursor-pointer hover:underline">
          <FaFacebook size={20} />
          <p>Log in with Facebook</p>
        </div>
        <div className="text-center mt-4">
          <p className="text-sm text-blue-500 cursor-pointer hover:underline">Forgot password?</p>
        </div>
        <div className="text-center mt-6 text-sm">
          <p className="text-gray-600">
            Dont have an account? <Link to='/register' className="text-blue-500 cursor-pointer hover:underline">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
