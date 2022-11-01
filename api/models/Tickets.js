const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: 'User'

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