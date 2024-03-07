const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const booksRoutes = require("./routes/books");
const userRoutes = require("./routes/user");

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PW}@${process.env.MONGODB_HOST}/?retryWrites=true&w=majority&appName=${process.env.MONGODB_APPNAME}`
    // { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(express.json());

app.use("/api/books", booksRoutes);
app.use("/api/auth", userRoutes);
app.use("/images", express.static(path.join(__dirname, "images")));

module.exports = app;
