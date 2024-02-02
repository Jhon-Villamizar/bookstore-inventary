import { Book } from "./book";

export interface List {
  onDelete: (id: number) => void;
  onUpdate: (book: Book) => void;
  books: Book[] | [];
}
