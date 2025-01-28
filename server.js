// DEPENDENCIES
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware
mongoose.connect(process.env.MONGODB_URI);
// log connection status to terminal on start
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

// Import Fruit Model
const Fruit = require("./models/fruit.js");

app.use(express.urlencoded({ extended: false }));

// Routes

// Get/Test Route
// app.get("/", async (req, res) => {
//     res.send("hello, friend!");
// });


// I.N.D.U.C.E.S. - Nemonic device
// I. = Index
// Get / Root Route
app.get("/", async (req, res) => {
  res.render("index.ejs");
});


// N. = New
// GET /fruits/new
app.get("/fruits/new", (req, res) => {
  res.render("fruits/new.ejs");
});


// D. = Delete


// U. = Update


// C. = Create
// POST /fruits
app.post("/fruits", async (req, res) => {
  if (req.body.isReadyToEat === "on") {
    req.body.isReadyToEat = true;
  } else {
    req.body.isReadyToEat = false;
  }
  await Fruit.create(req.body);
  
  res.redirect("/fruits/new");
});

// E. = Edit


// S. = Show


// Port - One of 3 ways to use the port variable
app.listen(3000, () => {
  console.log("Listening on port, 3000");
});
