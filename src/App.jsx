import React from "react";
import { Routes, Route } from "react-router-dom";
import Books_page from "./pages/Books_page";
import Edit_page from "./pages/Edit_page";
import Delete_page from "./pages/Delete_page";
import New_book_page from "./pages/New_book_page";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Books_page />} />
        <Route path="/edit/:id" element={<Edit_page />} />
        <Route path="/delete/:id" element={<Delete_page />} />
        <Route path="/create" element={<New_book_page />} />
      </Routes>
    </div>
  );
};

export default App;
