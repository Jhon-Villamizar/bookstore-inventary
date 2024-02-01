import express from 'express';
import cors from 'cors';
import { BookRoutes } from './interfaces/routes/book.routes';

const app = express();
app.use(cors());
app.use('/api', BookRoutes());

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is runing in port ${PORT}`);
});