const sharp = require("sharp");
const fs = require("fs");

module.exports = (req, res, next) => {
  if (!req.file) {
    return next();
  }
  const imagePath = req.file.path;
  const lastDot = imagePath.lastIndexOf(".");
  const extension = imagePath.substring(lastDot);
  sharp(imagePath)
    // Ajoutez ici les opérations de traitement d'image avec Sharp
    .resize(300, 200, { fit: "inside" }) // Exemple : redimensionnement de l'image
    .toFile(imagePath + "-resized" + extension, (err, info) => {
      if (err) {
        console.log(err);
        return res
          .status(500)
          .json({ error: "Erreur lors du traitement de l'image." });
      }
      sharp.cache(false);
      fs.unlinkSync(imagePath);
      req.file.path = imagePath + "-resized" + extension;
      req.file.addedName = "-resized" + extension;
      next();
    });
};
