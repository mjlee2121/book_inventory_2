import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Home from "./Home";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { title, author };

    axios.post("http://localhost:8000/books", newBook)
      .then(() => navigate("/"))
      .catch(error => console.error("Error adding book:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Author:</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
      </div>
      <button type="submit">Add Book</button>
      <Home />
    </form>
  );
};

export default AddBook;
