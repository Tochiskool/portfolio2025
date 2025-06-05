const mongoose = require("mongoose");

//Schema
const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    type: {
      type: String,
      enum: ["Employer", "Employee", "Friend"], // Add more if needed
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      trim: true,
    },
    textArea: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
    collection: "contact",
  }
);

const ContactModel = mongoose.model("contact", ContactSchema);
module.exports = ContactModel;
