const express = require("express");

const router = express.Router();

const { generateFakeData, getBooksByPage } = require("../controllers/book");

router.get("/api/fake-data", generateFakeData);

router.get("/api/books/:page", getBooksByPage);

// router.get("/api/posts", generateFakeData);
// // http://localhost:5000/api/posts
// router.post("/api/posts", postsController.create);
// // http://localhost:5000/api/posts
// router.put("/api/posts/:_id", postsController.update);
// // http://localhost:5000/api/posts/_id:5f11c07def842a36cc12a31e

module.exports = router;
