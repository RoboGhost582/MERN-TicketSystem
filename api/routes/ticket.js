const Ticket = require("../models/Tickets");
const User = require("../models/Users");
const router = require("express").Router();


//get all ticket for a person 
router.post("/", async (req, res) => {
  const {user}  = req.body 

  const userExist = await User.findById(user)

  if(userExist){
    const ticket = await Ticket.find({userid : user})
    res.status(200).json(ticket)
  }
  else{
    res.status(401).send("Ticket Not Found for this User")
  }
}); 

//create ticket  
router.post("/create", async (req, res) => {
    const {userid, name, email, product, desc, status }  = req.body
  
    const userExist = await User.findById(userid)
  
    if(userExist){
      const newTicket = await Ticket.create({
        userid,
        name,
        email,
        product,
        desc,
        status
      })
      res.status(200).json(newTicket)
    }
    else{
      res.status(401).send("User Does Not Exist") 
    }
  });

//get single ticket for a person 
router.post("/:id", async (req, res) => {
  const {id} = req.params
  const {user}  = req.body 

  const userExist = await User.findById(user)

  if(userExist){
    const ticket = await Ticket.findById(id)
    res.status(200).json(ticket)
  }
  else{
    res.status(401).send("Ticket Not Found for this User")
  }
}); 

//update a single ticket 
router.put("/:id/update", async (req, res) => {
  const {id} = req.params
  const {user}  = req.body 

  const userExist = await User.findById(user)

  if(userExist){
    const ticket = await Ticket.findById(id)
    res.status(200).json(ticket)
  }
  else{
    res.status(401).send("Ticket Not Found for this User") 
  }

  const updateTicket = await Ticket.findByIdAndUpdate(id, req.body) 
  res.status(200).json(updateTicket) 

}); 



module.exports = router; 