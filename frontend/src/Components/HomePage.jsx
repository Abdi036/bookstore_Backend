import React, { useContext, useState, useEffect } from "react";
import axios from "../../axios";
import Button from "./Button";
import { BookContext } from "../App";
import Card from "./Card";
import Modal from "./Modal";

export default function HomePage() {
  const { books, setBooks } = useContext(BookContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    publicationYear: "",
    genre: "",
    description: "",
    image:""
  });

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("/books");
        setBooks(response.data.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, [setBooks]);

  const handleAddBook = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/books", newBook);
      setBooks([...books, response.data]);
      setIsModalOpen(false);
      setNewBook({
        title: "",
        author: "",
        publicationYear: "",
        genre: "",
        description: "",
        image:""
      });
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewBook((prevState) => ({ ...prevState, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <header>
      <div className="flex items-center justify-center h-20 border p-4 shadow-sm">
        <h1 className="text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
          Welcome to BookStore
        </h1>
      </div>
      <div className="p-5 w-full flex justify-end">
        <Button onClick={() => setIsModalOpen(true)}>Add Book</Button>
      </div>
      <div className="border w-full h-auto p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {books.map((book) => (
          <Card
            key={book._id}
            id={book._id}
            title={book.title}
            author={book.author}
            image={book.image}
          />
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <form className="py-10" onSubmit={handleAddBook}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={newBook.title}
              onChange={(e) =>
                setNewBook({ ...newBook, title: e.target.value })
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="author"
            >
              Author
            </label>
            <input
              type="text"
              id="author"
              value={newBook.author}
              onChange={(e) =>
                setNewBook({ ...newBook, author: e.target.value })
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="publicationYear"
            >
              Publication Year
            </label>
            <input
              type="number"
              id="publicationYear"
              value={newBook.publicationYear}
              onChange={(e) =>
                setNewBook({ ...newBook, publicationYear: e.target.value })
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="genre"
            >
              Genre
            </label>
            <input
              type="text"
              id="genre"
              value={newBook.genre}
              onChange={(e) =>
                setNewBook({ ...newBook, genre: e.target.value })
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              cols="5"
              rows="5"
              id="description"
              value={newBook.description}
              onChange={(e) =>
                setNewBook({ ...newBook, description: e.target.value })
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              style={{ resize: "vertical" }}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="image"
            >
              Image
            </label>
            <input
              type="file"
              id="image"
              onChange={handleImageChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <Button type="submit">Add Book</Button>
          </div>
        </form>
      </Modal>
    </header>
  );
}
