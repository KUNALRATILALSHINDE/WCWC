const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://mongo:27017/mongodb_docker')
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("DB Connection Error:", err));

// Schema + Model
const userSchema = new mongoose.Schema({
  id: Number,
  name: String,
  city: String
});

const User = mongoose.model("User", userSchema);

// API Endpoint: GET /users
app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.listen(3000, () => {
  console.log("Node server running on port 3000");
});
