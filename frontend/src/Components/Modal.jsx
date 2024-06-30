import React from "react";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-600 bg-opacity-50">
      <div className="w-[40%] bg-white rounded shadow-lg p-8 relative mt-[50px] mb-[50px]">
        <button
          onClick={onClose}
          className="absolute top-16 right-1 text-gray-500 font-bold mr-4 mt-2"
        >
          &times;
        </button>
        <div className="py-6">{children}</div>
      </div>
    </div>
  );
}
