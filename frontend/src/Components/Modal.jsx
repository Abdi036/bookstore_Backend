import React from "react";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 mt-2 mr-2 text-gray-500"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
