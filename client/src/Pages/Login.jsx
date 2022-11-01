import React from "react";
import { useState } from "react";
import axios from "axios";
import UserContext from "../Context/UserContext";
import { useContext } from "react";
import {FaSignInAlt} from 'react-icons/fa'

function Login() {
  const { setCurrentUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/users/login", formData);
      if (res) {
        localStorage.setItem("User", JSON.stringify(res.data));
        setCurrentUser(JSON.parse(localStorage.getItem("User")))
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-4 p-4">
      <h1 className="flex items-center justify-center gap-2 font-bold text-3xl mb-3"><FaSignInAlt/>Login</h1>
      <h1 className="font-bold text-xl text-gray-400">
        Please log in to get support
      </h1>
      <form onSubmit={handleSubmit} className="mt-10 flex flex-col w-[300px]">
        <input
          className="border-2 mb-4 p-1"
          onChange={handleChange}
          name="email"
          placeholder="Enter your email"
          type="email"
        />
        <input
          className="border-2 mb-4 p-1"
          onChange={handleChange}
          name="password"
          placeholder="Enter your password"
          type="password"
        />
        <button className="bg-black text-white py-1">Submit</button>
      </form>
    </div>
  );
}

export default Login;
