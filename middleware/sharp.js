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
    .toFormat("webp", { quality: 50 })
    .resize(300, 500, { fit: "inside" })
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
