const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: String,
  description: String,
  discount: Number,
  cover: String,
  price: Number,
});

const Book = mongoose.model("books", BookSchema);

module.exports = Book;
