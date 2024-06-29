import React from "react";
import { useParams } from "react-router-dom";

export default function BookDetail() {
  const { id } = useParams();

  return (
    <div className="p-5">
      <h2 className="text-3xl font-bold">Book Details</h2>
      <p>Book ID: {id}</p>
    </div>
  );
}
