import React from "react";
import { Link } from "react-router-dom";

export default function Card({ id, title, author, image }) {
  return (
    <Link
      to={`/book/${id}`}
      className="max-w-sm rounded overflow-hidden shadow-lg bg-white cursor-pointer"
    >
      <img className="w-full" src={image} alt={`${title} cover`} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{author}</p>
      </div>
    </Link>
  );
}
