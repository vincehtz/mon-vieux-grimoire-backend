const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();
const multer = require("../middleware/multer-config");
const sharp = require("../middleware/sharp");

const bookCtrl = require("../controllers/books");

router.get("/", bookCtrl.getAllBooks);
router.get("/bestrating", bookCtrl.getBestBooks);
router.get("/:id", bookCtrl.getOneBook);
router.post("/", auth, multer, sharp, bookCtrl.addOneBook);
router.put("/:id", auth, multer, sharp, bookCtrl.modifyBook);
router.delete("/:id", auth, bookCtrl.deleteBook);
// router.post("/:id/rating", auth, bookCtrl.addRating);

module.exports = router;
