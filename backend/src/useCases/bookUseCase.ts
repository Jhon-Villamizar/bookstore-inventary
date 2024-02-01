import { Book } from "../domain/models/book";
import { bookService } from "../domain/services/bookService"

export class BookUseCase {
  async createBook(book: Omit<Book, 'id'>): Promise<Book> {
    return bookService.createBook(book)
  }

  async listBooks(): Promise<Book[]> {
    return bookService.listBooks();
  }

  async getBook(id: number): Promise<Book | null> {
    return bookService.getBook(id);
  }

  async updateBook(id: number, newBook: Omit<Book, 'id'>): Promise<Book | null> {
    return bookService.updateBook(id, newBook);
  }

  async deleteBook(id: number): Promise<boolean> {
    return bookService.deleteBook(id);
  }
}