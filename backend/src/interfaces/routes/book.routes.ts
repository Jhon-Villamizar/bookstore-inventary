import express from 'express';
import { BookUseCase } from '../../useCases/bookUseCase';
import { BookController } from '../controllers/bookController';

const router = express.Router();

export const BookRoutes = (): express.Router => {
  const bookUseCase = new BookUseCase();
  const bookController = new BookController(bookUseCase);

  router.get('/books', async (req, res) => bookController.listBooks(req, res));
  router.get('/books/:id', async (req, res) => bookController.getBook(req, res));
  router.post('/createBook', async (req, res) => bookController.createBook(req, res));
  router.put('/updateBook/:id', async (req, res) => bookController.updateBook(req, res));
  router.delete('/deleteBook/:id', async (req, res) => bookController.deleteBook(req, res));

  return router;
}