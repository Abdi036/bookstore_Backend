import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./Components/HomePage";
import BookDetail from "./Components/BookDetail";

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
  return <RouterProvider router={router} />;
}
