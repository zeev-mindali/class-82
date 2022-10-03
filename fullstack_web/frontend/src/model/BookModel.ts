class BookModel {
  public bookId: number = 0;
  public bookName?: string;
  public summary?: string;
  public genreId?: number;
  public price?: number;
  public stock?: number;
  public genreName?: string; //this will be needed on the frontend
}

export default BookModel;
