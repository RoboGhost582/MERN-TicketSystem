const User = require("../models/Users.js");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

//Create user
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  //Validation
  if (!name || !email || !password) {
    res.status(400);
    //throw new Error("Please include all fields");
  }

  //User Exist
  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    //throw new Error("User already exist");
  }

  //Hash Password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //Create User
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user.id)
    });
  } else {
    res.status(400);
    //throw new Error("Invalid User Data");
  }
});

//Login user
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  //Validation
  if (!email || !password) {
    res.status(400);
    //throw new Error("Please include all fields");
  }

  //User Exist
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user.id)
    });
  } else {
    res.status(401).json;
    //throw new Error("Invalid Credentia");
  }
});

//Get User
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id)
  if(user){
    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email
    })
  }
  else{
    res.status(404).send("User does not exist")
  }
});


//Generate Token
const generateToken = (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

module.exports = router;
