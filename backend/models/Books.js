const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: { type: String, required: [true, "Title is required"] },
  author: { type: String, required: [true, "Author is required"] },
  publicationYear: {
    type: Number,
    required: [true, "PublicationYear is required"],
  },
  genre: { type: String, required: [true, "Genre is required"] },
  description: { type: String, required: [true, "Description is required"] },
});

module.exports = mongoose.model("Book", BookSchema);
