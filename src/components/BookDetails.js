import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BookDetails = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/books/${bookId}`)
      .then(response => setBook(response.data))
      .catch(error => console.error("Error fetching book:", error));
  }, [bookId]);

  if (!book) return <p>Loading book details...</p>;

  return (
    <div>
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
    </div>
  );
};

export default BookDetails;
