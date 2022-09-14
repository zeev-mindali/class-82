import express, { NextFunction, Request, Response } from "express";
import BookModel from "../model/book-model";
import logic from "../logic/logic";

const router = express.Router();

// GET http://localhost:3001/api/genres
router.get(
  "/api/genres",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const genres = await logic.getAllGenres(); //will create array of objects
      response.json(genres); //send as json
    } catch (err: any) {
      next(err);
    }
  }
);

// GET http://localhost:3001/api/books

// POST http://localhost:3001/api/books
router.post(
  "/api/books",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const book = new BookModel(request.body);
      const addBook = await logic.addBook(book);
      response.status(201).json(addBook);
    } catch (err: any) {
      next(err);
    }
  }
);

// DELETE http://localhost:3001/api/books/:bookId
