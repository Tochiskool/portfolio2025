const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ContactModel = require("./models/Contacts");
const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json()); // used to pass our data from backend to frontend

// Connect Database using drivers
mongoose.connect(
  "mongodb+srv://awemu:12345@acn-db.ncp7fq5.mongodb.net/acn_portfolio?retryWrites=true&w=majority&appName=ACN-DB"
);

// API to access user
//get users
app.get("/getContacts", async (req, res) => {
  try {
    const contacts = await ContactModel.find();
    res.status(200).json(contacts);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch contacts", details: err.message });
  }
});

// insert data to Database
app.post("/createContacts", async (req, res) => {
  const contact = req.body;
  const newContact = new ContactModel(contact);
  await newContact.save();
  res.json(contact);
});
//App listening
app.listen(PORT, () => {
  console.log("Server is runnning on PORT: ", PORT);
});
