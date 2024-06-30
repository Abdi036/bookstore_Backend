import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Button from "./Button";
import data from "/public/data.json";

export default function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const bookDetails = data.find((book) => book.id === parseInt(id));
    setBook(bookDetails);
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  const { title, author, description, publicationYear, genre } = book;

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-slate-100 relative">
      <Link to="/" className="absolute top-4 left-4 text-xl text-gray-700">
        &larr; Back
      </Link>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img
          className="w-full"
          src="/marvels_spider_man_miles_morales_ps4_and_ps5_video_game_2-wallpaper-1366x768.jpg"
          alt={`${title} cover`}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">
            <strong>Author:</strong> {author}
          </p>
          <p className="text-gray-700 text-base">
            <strong>Genre:</strong> {genre}
          </p>
          <p className="text-gray-700 text-base">
            <strong>Publication Year:</strong> {publicationYear}
          </p>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="flex justify-around p-5">
          <Button>Update</Button>
          <Button>Delete</Button>
        </div>
      </div>
    </div>
  );
}
