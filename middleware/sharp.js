const sharp = require("sharp");
const fs = require("fs");

module.exports = (req, res, next) => {
  if (!req.file) {
    return next();
  }

  const imagePath = req.file.path;
  const lastDot = imagePath.lastIndexOf(".");
  const extension = imagePath.substring(lastDot);
  const imageName = imagePath.substring(0, lastDot);

  sharp(imagePath)
    .resize({ width: 800 })
    .toFormat("webp")
    .toFile(imageName + "_resized" + extension, (err, info) => {
      if (err) {
        console.error(err);
        return res
          .status(500)
          .json({ error: "Erreur lors du traitement de l'image." });
      }
      fs.unlinkSync(imagePath);
      req.file.path = imageName + "_resized" + extension; // Mise à jour du chemin de l'image dans la requête
      req.file.filename = imageName + "_resized" + extension; // Mise à jour du nom de l'image dans la requête
      next();
    });
};
