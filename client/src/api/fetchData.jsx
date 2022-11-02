//Login Data
const loginData = async (formData) => {
  const res = await axios.post("/api/users/login", formData);
};

//RegisterData
const registerData = async (formData) => {
  const res = await axios.post("/api/users/register", formData);
};

//Create Ticket
const createTicket = async (formData) => {
    const res = await axios.post("/api/tickets/create", formData);
};

//All Tickets for a user
const fetchData = async () => {
  const res = await axios.post("/api/tickets", { user: currentUser._id });
};
//Fetch Single based off ID
const fetchSingleTicket = async (id) => {
  const res = await axios.post(`/api/tickets/${id}`, { user: currentUser._id });
};

//Close Ticket
const onClickClose = async () => {
    await axios.put(`/api/tickets/${id}/update`, 
   {
     user: singleTicket.userid,
     status: "closed",
   });
}


