const multer = require("multer");

const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images");
  },
  filename: (req, file, callback) => {
    const originalName = file.originalname;
    const extension = MIME_TYPES[file.mimetype];
    const newName = originalName.replace(/\.[^.]+$/, "_");
    callback(null, newName + Date.now() + "." + extension);
  },
});

module.exports = multer({ storage: storage }).single("image");
