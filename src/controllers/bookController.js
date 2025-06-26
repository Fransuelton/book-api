import { stringFormatted } from "../utils/stringFormatted.js";

const books = [];

export const createBook = (request, response) => {
  const { name, author, company, description, user_id } = request.body;

  const booksAlreadyExists = books.find(
    (book) =>
      book.user_id === user_id &&
      stringFormatted(book.name) === stringFormatted(name)
  );

  if (booksAlreadyExists) {
    return response.status(400).json({ error: "Book already exists" });
  }

  books.push({
    name,
    author,
    company,
    description,
    Id: uuid(),
    user_id,
  });

  return response.status(201).json({ message: "OK" });
};

export const getUserBooks = (request, response) => {
  const { id } = request.params;

  const findBook = books.filter((book) => {
    return book.user_id === id;
  });

  return response.json(findBook);
};

export const deleteBook = (request, response) => {
  const { id } = request.params;

  const book = books.findIndex((book) => book.id === id);

  if (!book) {
    return response.status(400).json("Book not found");
  }

  books.splice(book, 1);

  return response.json(books);
};
