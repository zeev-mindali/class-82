import GenreModel from "../model/genre-model";
import BookModel from "../model/book-model";
import dal from "../utils/dal";
import { OkPacket } from "mysql";

async function getAllGenres(): Promise<GenreModel[]> {
  const sql = "SELECT * from genres";
  const genres = await dal.execute(sql);
  return genres;
}

const getAllGenresAF = async (): Promise<GenreModel[]> => {
  const sql = "SELECT * from genres";
  const genres = await dal.execute(sql);
  return genres;
};

async function getAllGenres_short(): Promise<GenreModel[]> {
  return await dal.execute(`SELECT * FROM genres`);
}

async function getAllBooks(): Promise<BookModel[]> {
  const sql = `SELECT books.*, genreName
                 FROM books JOIN genres
                 ON books.genreId = genres.genreId`;
  //return await dal.execute(sql);
  const books = await dal.execute(sql);
  //logic
  return books;
}

async function addBook(book: BookModel): Promise<BookModel> {
  const sql = `INSERT INTO books VALUES(
            DEFAULT,
            '${book.bookName}',
            '${book.summary}',
            ${book.genreId},
            ${book.price},
            ${book.stock}
        )`;
  const result: OkPacket = await dal.execute(sql);
  book.bookId = result.insertId;
  return book;
}

//function
async function deleteBook(bookId: number): Promise<void> {
  const sql = `DELETE FROM books WHERE bookId = ${bookId}`;
  const result: OkPacket = await dal.execute(sql);
}

//arrow function
const deleteBook2 = async (bookId: number): Promise<void> => {
  const sql = `DELETE FROM books WHERE bookId = ${bookId}`;
  const result: OkPacket = await dal.execute(sql);
};

export default {
  getAllGenres,
  getAllBooks,
  addBook,
  deleteBook,
};
