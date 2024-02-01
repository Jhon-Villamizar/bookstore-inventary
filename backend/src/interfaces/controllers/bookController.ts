import { Request, Response } from 'express'
import { BookUseCase } from "../../useCases/bookUseCase";

export class BookController {
  constructor(private readonly bookUseCase: BookUseCase) {};

  async createBook(req: Request, res: Response): Promise<void> {
    const { title, author, price, stockQuantity } = req.body;
    const newBook = await this.bookUseCase.createBook({title, author, price, stockQuantity});
    res.json(newBook);
  }
  async listBooks(req: Request, res: Response): Promise<void> {
    const book = await this.bookUseCase.listBooks();
    res.json(book);
  }
  async getBook(req: Request, res: Response): Promise<void> {
    const id = parseInt(req.params.id, 10);
    const book = await this.bookUseCase.getBook(id);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({message: `Book not found`});
    }
  }
  async updateBook(req: Request, res: Response): Promise<void> {
    const id = parseInt(req.params.id, 10);
    const { title, author, price, stockQuantity } = req.body;
    const newBook = await this.bookUseCase.updateBook(id,{title, author, price, stockQuantity});
    if (newBook) {
      res.json(newBook);
    } else {
      res.status(404).json({message: `Book not found`});
    }
  }
  async deleteBook(req: Request, res: Response): Promise<void> {
    const id = parseInt(req.params.id, 10);
    const book = await this.bookUseCase.deleteBook(id);
    if (book) {
      res.json({message: `Book deleted`});
    } else {
      res.status(404).json({message: `Book not found`});
    }
  }
}