import "./Menu.css";
import {NavLink} from "react-router-dom";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
			<NavLink to="/books">Books</NavLink>
            <span> | </span>
            <NavLink to="/books/new">Add Book</NavLink>
        </div>
    );
}

export default Menu;
