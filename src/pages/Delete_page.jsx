import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { hostname } from "../constants/config";
import { ToastContainer, toast } from "react-toastify";
const Delete_page = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  useEffect(() => {
    axios
      .get(`${hostname}/books/${id}`)
      .then((res) => {
        setTitle(res.data.title);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteBook = () => {
    axios
      .delete(`${hostname}/books/${id}`)
      .then(() => {
        console.log("book deleted");
        toast.success("Book deleted with success", {
          position: "bottom-right",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          onClose: () => {
            window.location.href = "/";
          },
        });
      })
      .catch((e) => {
        console.log(e);
        toast.error("an error occurred", {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          onClose: () => {
            window.location.href = "/";
          },
        });
      });
  };
  return (
    <div className="flex w-full justify-center items-center h-screen">
      <div className="max-w-md mx-auto bg-white p-8 border border-gray-300 rounded-lg shadow-md">
        <p className="text-lg font-medium text-gray-700 mb-4 text-center">
          {`Are you sure you want to delete ${title} ?`}
        </p>
        <div className="flex justify-between">
          <button
            onClick={deleteBook}
            className="bg-red-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Yes
          </button>
          <button
            onClick={() => {
              window.location.href = "/";
            }}
            className="bg-gray-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Cancel
          </button>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Delete_page;
