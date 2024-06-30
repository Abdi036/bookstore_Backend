import React, { createContext, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Components/HomePage";
import BookDetail from "./Components/BookDetail";
import data from "../public/data.json";

export const BookContext = createContext();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "book/:id",
    element: <BookDetail />,
  },
]);

export default function App() {
  const [books, setBooks] = useState(data);

  return (
    <BookContext.Provider value={{ books, setBooks }}>
      <RouterProvider router={router} />
    </BookContext.Provider>
  );
}
