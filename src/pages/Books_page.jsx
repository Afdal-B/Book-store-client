import React, { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import axios from "axios";
import Spiner from "../components/Spiner";
import { hostname } from "../constants/config";
import { Link } from "react-router-dom";
import ReactModal from "react-modal";
const Books_page = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  useEffect(() => {
    const url = `${hostname}/books`;
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(error);
      });
    return () => {};
  }, []);
  return loading ? (
    <Spiner></Spiner>
  ) : (
    <div>
      <div className="relative flex flex-wrap p-10 gap-6">
        {books.map((item) => (
          <BookCard
            key={item._id}
            id={item._id}
            title={item.title}
            author={item.author}
            year={item.publishYear}
            createdAt={item.createdAt}
            updatedAt={item.updatedAt}
          />
        ))}
        <Link to={`/create`}>
          <div className="p-4 h-full flex justify-center items-center border bg-gray-50 rounded-lg shadow-md w-[300px] cursor-pointer">
            <span className="text-4xl font-bold text-indigo-500">+</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Books_page;
