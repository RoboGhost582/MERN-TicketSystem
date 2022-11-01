import React from "react";
import { useState } from "react";
import axios from "axios";
import UserContext from "../Context/UserContext";
import { useContext } from "react";

function Register() {
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
      const res = await axios.post("/api/users/register", formData);
      setCurrentUser(res.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-4 p-4">
      <h1 className="font-bold text-3xl">Register</h1>
      <h1 className="font-bold text-xl text-gray-400">
        Please create an account
      </h1>
      <form onSubmit={handleSubmit} className="mt-10 flex flex-col w-[300px]">
        <input
          className="border-2 mb-4 p-1"
          onChange={handleChange}
          name="name"
          placeholder="Name"
          type="text"
        />
        <input
          className="border-2 mb-4 p-1"
          onChange={handleChange}
          name="email"
          placeholder="Email"
          type="email"
        />
        <input
          className="border-2 mb-4 p-1"
          onChange={handleChange}
          name="password"
          placeholder="Password"
          type="password"
        />
        <button className="bg-black text-white py-1">Submit</button>
      </form>
    </div>
  );
}

export default Register;
