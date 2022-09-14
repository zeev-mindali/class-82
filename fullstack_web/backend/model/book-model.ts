class BookModel {
  public bookId: number;
  public bookName: string;
  public summary: string;
  public genereId: number;
  public price: number;
  public stock: number;

  public constructor(
    bookId: number,
    bookName: string,
    summary: string,
    genereId: number,
    price: number,
    stock: number
  ) {
    this.bookId = bookId;
    this.bookName = bookName;
    this.summary = summary;
    this.genereId = genereId;
    this.price = price;
    this.stock = stock;
  }
}

export default BookModel;
