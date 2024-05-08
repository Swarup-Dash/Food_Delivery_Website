const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/food_data", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connect("mongodb://localhost:27017/food_data");

// Define a schema
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  confirmPassword: String,
});

// Define a model
const User = mongoose.model("User", UserSchema);

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Register endpoint
app.post("/api/register", async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    const user = new User({ name, email, password, confirmPassword });
    await user.save();
    res.json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Failed to register user" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
