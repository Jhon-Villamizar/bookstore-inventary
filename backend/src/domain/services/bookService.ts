import * as cache from 'memory-cache';
import { Book } from '../models/book';

const CACHE_KEY = 'books';

export class BookService {
  private getNextId(): number {
    const books = cache.get(CACHE_KEY) || [];
    return books.length + 1;
  }

  private getBooksFromCache(): Book[] {
    return cache.get(CACHE_KEY) || [];
  }

  private setBooksToCache(books: Book[]): void {
    cache.put(CACHE_KEY, books)
  }

  createBook(book: Omit<Book, 'id'>): Book {
    const newBook: Book = {
      id: this.getNextId(),
      ...book,
    }
    const books = this.getBooksFromCache();
    books.push(newBook);
    this.setBooksToCache(books);
    return newBook;
  }

  listBooks(): Book[] {
    return this.getBooksFromCache();
  }

  getBook(id: number): Book | null {
    const books = this.getBooksFromCache();
    return books.find(book => book.id === id) || null;
  }

  updateBook(id: number, newBook: Omit<Book, 'id'>): Book | null {
    const books = this.getBooksFromCache();
    const bookIndex = books.findIndex(book => book.id === id);
    if (bookIndex !== -1) {
      const updatedBook: Book = {
        id, ...newBook,
      }
      books[bookIndex] = updatedBook;
      this.setBooksToCache(books);
      return updatedBook;
    }
    return null;
  }

  deleteBook(id: number): boolean {
    const books = this.getBooksFromCache();
    const bookIndex = books.findIndex(book => book.id === id);
    if (bookIndex !== -1) {
      books.splice(bookIndex, 1);
      this.setBooksToCache(books);
      return true;
    }
    return false;
  }
}

export const bookService = new BookService();