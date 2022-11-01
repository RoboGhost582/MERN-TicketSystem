const Ticket = require("../models/Tickets");
const User = require("../models/Users");
const router = require("express").Router();


//get all ticket for a person 
router.get("/", async (req, res) => {
  const {user}  = req.body 

  const userExist = await User.findById(user)

  if(userExist){
    const ticket = await Ticket.find({user : user})
    res.status(200).json(ticket)
  }
  else{
    res.status(401).send("User Does Not Exist")
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



module.exports = router; 