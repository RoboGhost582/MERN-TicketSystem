import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    if(localStorage.getItem("User")){
      setCurrentUser(JSON.parse(localStorage.getItem("User")))
    }
    else{
      setCurrentUser({})
    }
  },[])
  

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
