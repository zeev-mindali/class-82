import axios from "axios";
import BookModel from "../model/BookModel";
import GenreModel from "../model/GenreModel";
import appConfig from "./config";

class BookService {
  public async getAllBooks(): Promise<BookModel[]> {
    const response = await axios.get<BookModel[]>(appConfig.booksUrl);
    const books = response.data;
    return books;
  }

  public async deleteBook(bookId:number): Promise<void> {
    await axios.delete(appConfig.booksUrl+bookId);
  }
}

const bookService = new BookService();
export default bookService;
