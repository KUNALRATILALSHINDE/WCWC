const mongoose = require("mongoose");

mongoose.connect("mongodb://mongo:27017/mongodb_docker")
  .then(async () => {
    const User = mongoose.model("User", new mongoose.Schema({
      id: Number,
      name: String,
      city: String
    }));

    await User.deleteMany(); // Clear old data

    await User.insertMany([
      { id: 1, name: "Kunal", address: "Pune" },
      { id: 2, name: "Omkar", address: "Mumbai" },
      { id: 3, name: "Tushar", address: "Delhi" }
    ]);

    console.log("Users inserted");
    process.exit();
  })
  .catch(err => console.error(err));
