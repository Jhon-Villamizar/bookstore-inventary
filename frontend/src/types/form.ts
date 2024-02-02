import { Book } from "./book";

export interface Form {
  onSubmit: (newBook: Book) => void;
  onCancel: () => void;
  updateBook: Book | null;
}
