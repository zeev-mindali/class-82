import express, { NextFunction, Request, Response } from "express";
import BookModel from "../model/book-model";
import logic from "../logic/logic";

const router = express.Router();

// GET    http://localhost:3001/api/genres
router.get(
  "/api/genres",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const genres = await logic.getAllGenres();
      response.json(genres);
    } catch (err: any) {
      next(err);
    }
  }
);

//dre -> data,request,error -> request,response,next
// GET    http://localhost:3001/api/books
router.get(
  "/api/books",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const books = await logic.getAllBooks();
      if (books.length == 0) {
        //logic for find similar books SQL->LIKE
      }
      response.json(books);
    } catch (err: any) {
      next(err);
    }
  }
);

// POST   http://localhost:3001/api/books
router.post(
  "/api/books",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const book = new BookModel(request.body);
      const addedBook = await logic.addBook(book);
      response.status(201).json(addedBook);
    } catch (err: any) {
      next(err);
    }
  }
);

// DELETE http://localhost:3001/api/books/:bookId
router.delete(
  "/api/books/:bookId",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const bookId = +request.params.bookId;
      await logic.deleteBook(bookId);
      response.status(204).json("{msg:'done'}");
    } catch (err: any) {
      next(err);
    }
  }
);

// DELETE http://localhost:3001/api/books/:from/:to

export default router;
