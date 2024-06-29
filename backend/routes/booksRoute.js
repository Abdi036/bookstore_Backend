const express = require("express");
const Book = require("../models/bookModel");

const router = express.Router();

// Route for Get All Books from the database
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res
      .status(200)
      .json({ status: "success", count: books.length, data: books });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ status: "fail", message: error.message });
  }
});

// Route for Save a new Book
router.post("/", async (req, res) => {
  const { title, author, publishYear, Description, Genre } = req.body;
  if (!title || !author || !publishYear) {
    return res
      .status(400)
      .json({ status: "fail", message: "All fields are required." });
  }
  try {
    const newBook = new Book({
      title,
      author,
      publishYear,
      Description,
      Genre,
    });
    const savedBook = await newBook.save();
    res.status(201).json({ status: "success", savedBook });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Route for Get One Book from the database by id
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res
        .status(404)
        .json({ status: "fail", message: "Book not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ status: "fail", message: error.message });
  }
});

// Route for Update a Book
router.patch("/:id", async (req, res) => {
  const { title, author, publishYear, Description, Genre } = req.body;
  if (!title || !author || !publishYear || !Description || !Genre) {
    return res
      .status(400)
      .json({ status: "fail", message: "All fields are required" });
  }
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      { title, author, publishYear, Description, Genre },
      { new: true, runValidators: true }
    );
    if (!updatedBook) {
      return res
        .status(404)
        .json({ status: "fail", message: "Book not found" });
    }
    res.status(200).json(updatedBook);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Route for Delete a book
router.delete("/:id", async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) {
      return res
        .status(404)
        .json({ status: "fail", message: "Book not found" });
    }
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
