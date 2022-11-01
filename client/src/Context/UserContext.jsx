import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [tickets, setTickets] = useState([]);
  const [singleTicket, setSingleTicket] = useState({});
  const [userStatus, setUserStatus] = useState(false);

  useEffect(() => {
  if( localStorage.getItem("User")){
      setCurrentUser(JSON.parse(localStorage.getItem("User")))
      setUserStatus(true)
    }
    else{
      setCurrentUser({})
      setUserStatus(false)
    }
  },[])
  

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser, userStatus, tickets, setTickets, singleTicket, setSingleTicket}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
