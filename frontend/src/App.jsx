import React from "react";
import Button from "./Components/Button";
import Card from "./Components/Card";
import data from "../public/data.json";
export default function Header() {
  return (
    <header>
      <div className="flex items-center justify-center h-20 border p-4 shadow-sm">
        <h1 className="text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
          Welcome to BookStore
        </h1>
      </div>
      <div className="p-5 w-full flex justify-end">
        <Button>AddBook</Button>
      </div>
      <div className="border w-full h-auto p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((book) => (
          <Card key={book.id} title={book.title} author={book.author} />
        ))}
      </div>
    </header>
  );
}
