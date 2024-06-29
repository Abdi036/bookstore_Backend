import React from "react";
import Button from "./Components/Button";
import Card from "./Components/Card";

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
      <Card />
    </header>
  );
}
