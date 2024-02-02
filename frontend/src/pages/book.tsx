import { useEffect, useState } from "react";
import BookForm from "../components/bookForm";
import ListBooks from "../components/listBook";
import BookService from "../services/bookService";
import useShowForm from "../hooks/useShowForm";
import { Book } from "../types/book";

const BooksPage = () => {
  const { showForm, setShowForm } = useShowForm();
  const [books, setBooks] = useState([]);
  const [updateBook, setUpdateBook] = useState(null);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    const books = await BookService.listBooks();
    setBooks(books);
  };

  const handlerSaveBook = async (newBook: Book) => {
    if (updateBook) {
      await BookService.updateBook(newBook);
      setShowForm(false);
    } else {
      await BookService.createBooks(newBook);
      setShowForm(false);
    }
    loadBooks();
    setUpdateBook(null);
  };

  const handlerDeleteBook = async (id: number) => {
    await BookService.deleteBook(id);
    loadBooks();
  };

  const handlerUpdateBook = (book: any) => {
    setShowForm(true);
    setUpdateBook(book);
  };

  const handlerCancelUpdate = () => {
    setShowForm(false);
    setUpdateBook(null);
  };

  return (
    <div className="container">
      <h1>Library inventory</h1>
      {!showForm && (
        <button className="add" onClick={() => setShowForm(true)}>
          Add new Book
        </button>
      )}
      {showForm && (
        <BookForm
          onSubmit={handlerSaveBook}
          updateBook={updateBook}
          onCancel={handlerCancelUpdate}
        />
      )}
      <div className="scroll">
        <ListBooks
          books={books}
          onDelete={handlerDeleteBook}
          onUpdate={handlerUpdateBook}
        />
      </div>
    </div>
  );
};

export default BooksPage;
