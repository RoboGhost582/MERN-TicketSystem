import React from 'react'
import { FaQuestionCircle, FaTicketAlt } from 'react-icons/fa'
import {Link} from 'react-router-dom'

function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center mt-4 p-4">
      <h1 className="font-bold text-3xl">What do you need help with?</h1>
      <h1 className="font-bold text-xl text-gray-400">
        Please chose from the option below
      </h1>
      <div className="mt-10 flex flex-col w-[300px]">
        <Link to = {"/newticket"}>
          <button className=" flex border-2 border-black text-black py-1 mb-4 items-center justify-center gap-2 w-full"> <FaQuestionCircle />Create New Ticket</button>
        </Link>
        <Link to = {"/tickets"}>
          <button className="flex bg-black text-white py-1 items-center justify-center gap-2 w-full"><FaTicketAlt /> View My Ticket</button>
        </Link>
      </div>
    </div>
  )
}

export default HomePage