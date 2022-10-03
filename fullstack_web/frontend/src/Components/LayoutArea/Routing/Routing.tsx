import { Route, Routes } from "react-router-dom";
import About from "../../AboutArea/About/About";
import AddBook from "../../BookArea/AddBook/AddBook";
import BookList from "../../BookArea/BookList/BookList";
import Home from "../../HomeArea/Home/Home";
import PageNotFound from "../PageNotFound/PageNotFound";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/books" element={<BookList/>}/>
                <Route path="/books/new" element={<AddBook/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </div>
    );
}

export default Routing;
