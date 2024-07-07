import React, { useState } from "react";

import {
  FaEdit,
  FaTrash,
  FaInfoCircle,
  FaBook,
  FaUser,
  FaCalendarAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ReactModal from "react-modal";
const BookCard = ({ id, title, author, year, createdAt, updatedAt }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-4 border bg-gray-50 rounded-lg shadow-md w-[300px]">
      <div className="flex  gap-5 items-center">
        <FaBook className="text-gray-800 mb-2" />
        <h2 className="text-xl font-bold mb-2">{title}</h2>
      </div>
      <div className="flex gap-5 items-center">
        <FaUser className="text-gray-700  mb-1" />
        <p className="text-gray-700 mb-1">{author}</p>
      </div>
      <div className="flex  items-center gap-5">
        <FaCalendarAlt className="text-gray-500 mb-4" />
        <p className="text-gray-500 mb-4">{year}</p>
      </div>
      <div className="flex justify-center space-x-5">
        <FaInfoCircle
          title="Info"
          className="text-green-500 cursor-pointer"
          onClick={() => setOpen(true)}
        />

        <Link to={`/edit/${id}`}>
          <FaEdit title="Edit" className="text-blue-500 cursor-pointer" />
        </Link>
        <Link to={`/delete/${id}`}>
          <FaTrash title="Delete" className="text-red-500 cursor-pointer" />
        </Link>
      </div>
      <ReactModal
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "opacity 0.5s ease-in-out",
          },
          content: {
            position: "relative",
            inset: "auto",
            padding: "0",
            border: "none",
            borderRadius: "8px",
            background: "white",
            maxWidth: "400px",
            width: "90%",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease-in-out",
            transform: "scale(0.9)",
          },
        }}
        onAfterOpen={() => {
          document.querySelector(".ReactModal__Content").style.transform =
            "scale(1)";
        }}
      >
        <div className="p-4 border bg-gray-50 rounded-lg shadow-md w-full">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <div className="flex gap-5 items-center">
            <p className="text-gray-700 mb-1">Author: {author}</p>
          </div>
          <div className="flex items-center gap-5">
            <p className="text-gray-500 mb-4">Year: {year}</p>
          </div>
          <div className="flex items-center gap-5">
            <p className="text-gray-500 mb-4">Created At: {createdAt}</p>
          </div>
          <div className="flex items-center gap-5">
            <p className="text-gray-500 mb-4">Last Update: {updatedAt}</p>
          </div>
        </div>
      </ReactModal>
    </div>
  );
};

export default BookCard;
