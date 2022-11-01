import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import UserContext from "../Context/UserContext";
import { useContext } from "react";
import { useEffect } from "react";
import TableItems from "../Components/TableItems";

function SingleTicket() {
  const { singleTicket, setSingleTicket, currentUser } =
    useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.post(`/api/tickets/${id}`, {
        user: currentUser._id,
      });
      if (res) {
        console.log(res.data);
        setSingleTicket(res.data);
      }
    };
    fetchData();
  }, []);

  let { id } = useParams();

  const onClickClose = async () => {
    return await axios.put(`/api/tickets/${id}/update`, { status: "closed" });
  };

  const onClickOpen = async () => {
    return await axios.put(`/api/tickets/${id}/update`, { status: "open" });
  };

  const closed = singleTicket.status;

  return (
    <div className="flex flex-col items-start justify-start p-4">
      <button className=" border-2 w-[150px] h-[50px] rounded-xl text-center my-4">
        Back
      </button>
      <div className="flex justify-between items-center sm:gap-10 md:gap-20 lg:gap-32 border-b-2 w-[50%]">
        <div className="flex flex-col">
          <h1 className="mt-4 font-bold text-2xl">Tickets: {id}</h1>
          <p className="my24 font-bold text-md">
            Date Submitted: {singleTicket.createdAt}
          </p>
        </div>
        <div>
          {closed === "closed" ? (
            <p className="border-2 bg-red-500 px-5 rounded-full text-white text-center">
              {" "}
              {singleTicket.status}{" "}
            </p>
          ) : (
            <p className="border-2 bg-green-500 px-5 rounded-full text-white text-center">
              {" "}
              {singleTicket.status}{" "}
            </p>
          )}
        </div>
      </div>
      <div className="bg-slate-300 w-auto mt-4 rounded p-2 ">
        <p className="font-bold text-md mb-1">Description of Issue: </p>
        <p className> {singleTicket.desc} </p>
      </div>
      {closed === "closed" ? (
        <button
          onClick={onClickClose}
          className="mt-4 bg-green-500 w-7/12 rounded"
        >
          Open
        </button>
      ) : (
        <button
          onClick={onClickOpen}
          className="mt-4 bg-red-500 w-7/12 rounded"
        >
          Close
        </button>
      )}
    </div>
  );
}

export default SingleTicket;
