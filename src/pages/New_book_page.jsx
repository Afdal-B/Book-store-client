import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { hostname } from "../constants/config";
import GoBack from "../components/GoBack";
const New_book_page = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publishYear: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `${hostname}/books`;
    axios
      .post(url, formData)
      .then(() => {
        console.log("book created");
        toast.success("Book created with success", {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          onClose: () => {
            window.location.href = "/books";
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
            window.location.href = "/books";
          },
        });
      });
  };
  return (
    <>
      <div className="flex w-full flex-col justify-center items-center h-screen">
        <div className="absolute top-3 left-3">
          <GoBack></GoBack>
        </div>
        <h1 className="text-2xl font-bold text-center mb-3">
          Create a new book
        </h1>
        <div className="max-w-md mx-auto bg-white p-8 border border-gray-300 rounded-lg shadow-md">
          <form className="space-y-6 " onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                value={formData.title}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="author"
                className="block text-sm font-medium text-gray-700"
              >
                Author
              </label>
              <input
                type="text"
                name="author"
                id="author"
                value={formData.author}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="year"
                className="block text-sm font-medium text-gray-700"
              >
                Year
              </label>
              <input
                type="number"
                name="publishYear"
                id="publishYear"
                value={formData.publishYear}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <button
              type="submit"
              className="mt-4 w-full bg-indigo-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default New_book_page;
