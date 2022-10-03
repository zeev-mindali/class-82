import { useEffect, useState } from "react";
import BookModel from "../../../model/BookModel";
import bookService from "../../../Util/BookService";
import "./BookList.css";

function BookList(): JSX.Element {
    const [books,setBooks] = useState<BookModel[]>([]); 
    //let myBooks:BookModel[] = [];

    useEffect(() =>{
        bookService.getAllBooks()
        .then(books=>setBooks(books))
        .catch(err=>alert(err.message));
    },[]);

    // const deleteBook = async (bookId:number)=>{
    //     await bookService.deleteBook(bookId);
    //     alert ("Book deleted successfully");
    //     //render the ui
    // };

    async function deleteBook(bookId:number){
        await bookService.deleteBook(bookId);
        alert ("Book deleted successfully");
    }

    const rebook = (bookId:number)=>{
        deleteBook(bookId);
        const newList = {...books}.filter(item=>item.bookId != bookId);
        setBooks(newList);
    }

    return (
        <div className="BookList">
			<table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Summary</th>
                        <th>Genre</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map(singleBook=>
                        <tr key={singleBook.bookId}>
                            <td>{singleBook.bookName}</td>
                            <td>{singleBook.summary}</td>
                            <td>{singleBook.genreName}</td>
                            <td>{singleBook.price}</td>
                            <td>{singleBook.stock}</td>
                            <td>
                                <button onClick={()=>{rebook(singleBook.bookId)}}>X</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default BookList;
