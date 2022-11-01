import React from 'react'
import { useState } from "react";
import axios from "axios";
import UserContext from "../Context/UserContext";
import { useContext } from "react";


function NewTicket() {
    const { currentUser } = useContext(UserContext);
    const [formData, setFormData] = useState({
        userid: currentUser._id,
        name: "",
        email: "",
        product: "",
        desc: "",
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
            const res = await axios.post("/api/tickets/create", formData);

            if (res) {
                localStorage.setItem("Ticket", JSON.stringify(res.data));
                //setCurrentUser(JSON.parse(localStorage.getItem("User")))
            }

        } catch (error) {
            console.log(error.response);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center mt-4 p-4">
            <h1 className="flex items-center justify-center gap-2 font-bold text-3xl mb-3">Create New Ticket</h1>
            <h1 className="font-bold text-xl text-gray-400">
                Please fill out the form below
            </h1>
            <form onSubmit={handleSubmit} className="mt-10 flex flex-col w-[300px]">
                <label>Customer Name</label>
                <input
                    className="border-2 mb-4 p-1"
                    onChange={handleChange}
                    name="name"
                    type="text"
                />
                <label>Customer Email</label>
                <input
                    className="border-2 mb-4 p-1"
                    onChange={handleChange}
                    name="email"
                    type="text"
                />
                <label>Product</label>
                <select className="border-2 mb-4 p-1" name='product' onChange={handleChange}>
                    <option value="iPhone">iPhone</option>
                    <option value="iMac">iMac</option>
                    <option value="Mac Book">Mac Book</option>
                    <option value="iPad">iPad</option>
                </select>
                <label>Description of the issues</label>
                <textarea className='border-2 border-b py-1 px-2 w-full' placeholder='Description' name='desc' onChange={handleChange}></textarea>
                <button className="bg-black text-white py-1 mt-4">Submit</button>
            </form>
        </div>
    );
}

export default NewTicket