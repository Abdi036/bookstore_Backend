const express = require("express");
const Book = require("../models/BookSchema");

const router = express.Router();

// getAll Books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({
      status: "success",
      books,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      message: `Error while loading Books: ${error.message}`,
    });
  }
});
