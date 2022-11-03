import axios from "axios";

export default fetchData;

//Login Data
export const login = (data) =>
  axios.post("/api/users/login", data).then((res) => res.data);
//Register
export const register = (data) =>
axios.post("/api/users/register", data).then((res) => res.data);

export const createTicket = (data) =>
axios.post("/api/tickets/create", data).then((res) => res.data);

export const fetchAllTickets = (data) =>
axios.post("/api/tickets", data).then((res) => res.data);

