import { useContext } from "react";
import { BookContext } from "../App";
export default function Footer() {
  const { books } = useContext(BookContext);
  return (
    <div className=" p-8 fixed bottom-0 w-full bg-red-300 z-[-1]">
      <p className="text-center text-xl">Total Books: {books.length}</p>
    </div>
  );
}
