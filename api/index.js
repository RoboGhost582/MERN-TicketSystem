const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// const helmet = require("helmet");
// const morgan = require("morgan");
const userRoute = require("./routes/users");
const ticketRoute = require("./routes/ticket");

dotenv.config();

//Database connection
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

//Middleware
app.use(express.json());
// app.use(helmet());
// app.use(morgan("common"));

//localhost:8800/api/
app.use("/api/users", userRoute);
app.use("/api/tickets", ticketRoute);


app.listen(5000, () => {
  console.log("Backend server is running!");
});

