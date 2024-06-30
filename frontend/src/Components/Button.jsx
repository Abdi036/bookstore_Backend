import React from "react";

export default function Button({ children, className = "", onClick }) {
  return (
    <button
      className={`px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
