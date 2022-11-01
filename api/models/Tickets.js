const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema(
  {
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: 'User'
    },
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    product: {
      type: String,
      require: [true, "Please add a email"],
      enum: ['iPhone', 'Macbook Pro', 'iMac', 'iPad'],
    },
    desc: {
      type: String,
      require: [true, "Please enter a description of the issue"],
    },
    status: {
        type: String,
        enum: ['new', 'open', 'closed'],
        default: 'new',
      },

  },
  { timestamps: true }
);

module.exports = mongoose.model("Ticket", TicketSchema);