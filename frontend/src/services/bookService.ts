const API_URL = 'http://localhost:4000/api';

const BookService = {
  listBooks: async () => {
    const response = await fetch(`${API_URL}/books`);
    const books = response.json();
    return books;
  },

  createBooks: async (book: any) => {
    const response = await fetch(`${API_URL}/createBook`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book),
    });
    const newBook = await response.json();
    return newBook;
  },

  updateBook: async ({id, title, author, price, stockQuantity}: any) => {
    const response = await fetch(`${API_URL}/updateBook/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title, author, price, stockQuantity}),
    });
    const newBook = await response.json();
    return newBook;
  },

  deleteBook: async (id: number) => {
    await fetch(`${API_URL}/deleteBook/${id}`, {
      method: 'DELETE',
    })
  }
}

export default BookService;
