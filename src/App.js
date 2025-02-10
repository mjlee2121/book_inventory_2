import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import BookDetails from "./components/BookDetails";
import Layout from "./components/Layout";
import DeleteBook from "./components/DeleteBook";

function App() {
  return (
    <Layout>
      <Router>
        <div>
          <h1>Book Inventory</h1>
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/books/:bookId" element={<BookDetails />} />
            <Route path="/add-book" element={<AddBook />} />
            <Route path="/delete-book/:bookId" element={<DeleteBook />}></Route>
          </Routes>
        </div>
      </Router>
    </Layout>
  );
}

export default App;
