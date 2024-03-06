const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://vince_htz:lMzkVi5SEOIH5pVo@clustermvg.aypd75t.mongodb.net/?retryWrites=true&w=majority&appName=ClusterMVG"
    // { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(express.json());

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

app.post("/api/books", (req, res, next) => {
  console.log(req.body);
  res.status(201).json({ message: "objet créé" });
});

app.get("/api/books", (req, res, next) => {
  const books = [
    {
      userId: "identifiant MongoDB unique de l'utilisateur",
      title: "Titre du livre",
      author: "Auteur du livre",
      imageUrl:
        "https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg",
      year: 2023,
      genre: "Genre du livre",
      ratings: [
        {
          userId: "identifiant MongoDB unique de l'utilisateur",
          grade: 5,
        },
      ],
      averageRating: 4,
    },
  ];
  res.status(200).json(books);
});

module.exports = app;
