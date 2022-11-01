import React, { createContext, useState } from "react";
import { useEffect } from "react";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    localStorage.setItem("id", currentUser._id);
  },);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
