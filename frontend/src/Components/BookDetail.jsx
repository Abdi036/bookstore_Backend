// import React, { useEffect, useState } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import Button from "./Button";
// import data from "/public/data.json";
// import Modal from "./Modal";

// export default function BookDetail() {
//   const { id } = useParams();
//   const [book, setBook] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [updatedBook, setUpdatedBook] = useState({});
//   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const bookDetails = data.find((book) => book.id === parseInt(id));
//     setBook(bookDetails);
//     setUpdatedBook(bookDetails);
//   }, [id]);

//   if (!book) {
//     return <div>Loading...</div>;
//   }

//   const handleUpdate = () => {
//     const updatedData = data.map((b) => (b.id === book.id ? updatedBook : b));
//     setBook(updatedBook);
//     setIsEditing(false);
//   };

//   const handleDelete = () => {
//     const updatedData = data.filter((b) => b.id !== book.id);
//     navigate("/");
//   };

//   return (
//     <div className="w-full h-screen flex flex-col items-center justify-center bg-slate-100 relative">
//       <Link to="/" className="absolute top-4 left-4 text-xl text-gray-700">
//         &larr; Back
//       </Link>
//       <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
//         <img
//           className="w-full"
//           src={
//             "/marvels_spider_man_miles_morales_ps4_and_ps5_video_game_2-wallpaper-1366x768.jpg"
//           }
//           alt={`cover`}
//         />
//         <div className="px-6 py-4">
//           {isEditing ? (
//             <>
//               <input
//                 type="text"
//                 value={updatedBook.title}
//                 onChange={(e) =>
//                   setUpdatedBook({ ...updatedBook, title: e.target.value })
//                 }
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
//               />
//               <input
//                 type="text"
//                 value={updatedBook.author}
//                 onChange={(e) =>
//                   setUpdatedBook({ ...updatedBook, author: e.target.value })
//                 }
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
//               />
//               <input
//                 type="text"
//                 value={updatedBook.genre}
//                 onChange={(e) =>
//                   setUpdatedBook({ ...updatedBook, genre: e.target.value })
//                 }
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
//               />
//               <input
//                 type="number"
//                 value={updatedBook.publicationYear}
//                 onChange={(e) =>
//                   setUpdatedBook({
//                     ...updatedBook,
//                     publicationYear: e.target.value,
//                   })
//                 }
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
//               />
//               <textarea
//                 value={updatedBook.description}
//                 onChange={(e) =>
//                   setUpdatedBook({
//                     ...updatedBook,
//                     description: e.target.value,
//                   })
//                 }
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
//               />
//               <Button onClick={handleUpdate}>Save</Button>
//             </>
//           ) : (
//             <>
//               <div className="font-bold text-xl mb-2">{book.title}</div>
//               <p className="text-gray-700 text-base">
//                 <strong>Author:</strong> {book.author}
//               </p>
//               <p className="text-gray-700 text-base">
//                 <strong>Genre:</strong> {book.genre}
//               </p>
//               <p className="text-gray-700 text-base">
//                 <strong>Publication Year:</strong> {book.publicationYear}
//               </p>
//               <p className="text-gray-700 text-base">{book.description}</p>
//             </>
//           )}
//         </div>
//         <div className="flex justify-around p-5">
//           {isEditing ? (
//             <Button onClick={() => setIsEditing(false)}>Cancel</Button>
//           ) : (
//             <Button onClick={() => setIsEditing(true)}>Update</Button>
//           )}
//           <Button onClick={() => setIsDeleteModalOpen(true)}>Delete</Button>
//         </div>
//       </div>
//       <Modal
//         isOpen={isDeleteModalOpen}
//         onClose={() => setIsDeleteModalOpen(false)}
//       >
//         <div className="p-5">
//           <p>Are you sure you want to delete this book?</p>
//           <div className="flex justify-around mt-5">
//             <Button onClick={handleDelete}>Yes</Button>
//             <Button onClick={() => setIsDeleteModalOpen(false)}>No</Button>
//           </div>
//         </div>
//       </Modal>
//     </div>
//   );
// }

import React, { useEffect, useState, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { BookContext } from "../App";
import Modal from "./Modal";

export default function BookDetail() {
  const { id } = useParams();
  const { books, setBooks } = useContext(BookContext);
  const [book, setBook] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedBook, setUpdatedBook] = useState({});
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const bookDetails = books.find((book) => book.id === parseInt(id));
    setBook(bookDetails);
    setUpdatedBook(bookDetails);
  }, [id, books]);

  if (!book) {
    return <div>Loading...</div>;
  }

  const handleUpdate = () => {
    const updatedData = books.map((b) => (b.id === book.id ? updatedBook : b));
    setBooks(updatedData);
    setBook(updatedBook);
    setIsEditing(false);
  };

  const handleDelete = () => {
    const updatedData = books.filter((b) => b.id !== book.id);
    setBooks(updatedData);
    navigate("/");
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-slate-100 relative">
      <Link to="/" className="absolute top-4 left-4 text-xl text-gray-700">
        &larr; Back
      </Link>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img
          className="w-full"
          src={
            book.image ||
            "/marvels_spider_man_miles_morales_ps4_and_ps5_video_game_2-wallpaper-1366x768.jpg"
          }
          alt={`${book.title} cover`}
        />
        <div className="px-6 py-4">
          {isEditing ? (
            <>
              <input
                type="text"
                value={updatedBook.title}
                onChange={(e) =>
                  setUpdatedBook({ ...updatedBook, title: e.target.value })
                }
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              />
              <input
                type="text"
                value={updatedBook.author}
                onChange={(e) =>
                  setUpdatedBook({ ...updatedBook, author: e.target.value })
                }
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              />
              <input
                type="text"
                value={updatedBook.genre}
                onChange={(e) =>
                  setUpdatedBook({ ...updatedBook, genre: e.target.value })
                }
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              />
              <input
                type="number"
                value={updatedBook.publicationYear}
                onChange={(e) =>
                  setUpdatedBook({
                    ...updatedBook,
                    publicationYear: e.target.value,
                  })
                }
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              />
              <textarea
                value={updatedBook.description}
                onChange={(e) =>
                  setUpdatedBook({
                    ...updatedBook,
                    description: e.target.value,
                  })
                }
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              />
              <Button onClick={handleUpdate}>Save</Button>
            </>
          ) : (
            <>
              <div className="font-bold text-xl mb-2">{book.title}</div>
              <p className="text-gray-700 text-base">
                <strong>Author:</strong> {book.author}
              </p>
              <p className="text-gray-700 text-base">
                <strong>Genre:</strong> {book.genre}
              </p>
              <p className="text-gray-700 text-base">
                <strong>Publication Year:</strong> {book.publicationYear}
              </p>
              <p className="text-gray-700 text-base">{book.description}</p>
            </>
          )}
        </div>
        <div className="flex justify-around p-5">
          {isEditing ? (
            <Button onClick={() => setIsEditing(false)}>Cancel</Button>
          ) : (
            <Button onClick={() => setIsEditing(true)}>Update</Button>
          )}
          <Button onClick={() => setIsDeleteModalOpen(true)}>Delete</Button>
        </div>
      </div>
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
      >
        <div className="p-5">
          <p>Are you sure you want to delete this book?</p>
          <div className="flex justify-around mt-5">
            <Button onClick={handleDelete}>Yes</Button>
            <Button onClick={() => setIsDeleteModalOpen(false)}>No</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
