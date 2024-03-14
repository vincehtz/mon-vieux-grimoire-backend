const sharp = require("sharp");
const fs = require("fs");

module.exports = (req, res, next) => {
  if (!req.file) {
    return next();
  }

  const imagePath = req.file.path;
  const lastDot = imagePath.lastIndexOf(".");
  const imageName = imagePath.substring(0, lastDot);
  const newExtension = ".webp";

  sharp(imagePath)
    .resize(300, 500, { fit: "inside" })
    .toFormat("webp")
    .toFile(imageName + "_resized" + newExtension, (err, info) => {
      if (err) {
        console.error(err);
        return res
          .status(500)
          .json({ error: "Erreur lors du traitement de l'image." });
      }
      fs.unlinkSync(imagePath);
      req.file.path = imageName + "_resized" + newExtension;
      req.file.filename = imageName + "_resized" + newExtension;
      next();
    });
};
