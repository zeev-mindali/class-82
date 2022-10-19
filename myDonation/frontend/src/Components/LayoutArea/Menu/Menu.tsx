import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
			<NavLink to="/donations/list">Donations</NavLink>
            <span> | </span>
            <NavLink to="/donation/new">New Donation</NavLink>
        </div>
    );
}

export default Menu;

