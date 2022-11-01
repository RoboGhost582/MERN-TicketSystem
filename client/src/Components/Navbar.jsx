import React from "react";
import { Link } from "react-router-dom";
import { FaUserAlt, FaSignInAlt } from "react-icons/fa";
import UserContext from "../Context/UserContext";
import { useContext } from "react";

const handleLogOut = () => {
  localStorage.clear()
  window.location.reload()
}

function Navbar() {
  const { userStatus } = useContext(UserContext);
  return (
    <div className="flex p-4 justify-between items-center border-b-2">
      <Link to={"/"}>
        <h1 className="font-bold text-lg">Suppot Desk</h1>
      </Link>
      <div className="flex gap-3 font-bold">
        {userStatus ? (
          <button onClick={handleLogOut} >Logout</button>
        ) : (
          <>
            <Link to={"/login"}>
              <p className="flex items-center justify-center gap-1">
                {" "}
                <FaSignInAlt /> Login
              </p>
            </Link>
            <Link to={"/register"}>
              <p className="flex items-center justify-center gap-1">
                {" "}
                <FaUserAlt /> Register
              </p>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
