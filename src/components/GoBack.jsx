import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const GoBack = () => {
  return (
    <div
      onClick={() => {
        window.location.href = "/books";
      }}
      className="cursor-pointer flex items-center"
    >
      <FaArrowLeft className="mr-2" />
      <span>Go Back</span>
    </div>
  );
};

export default GoBack;
