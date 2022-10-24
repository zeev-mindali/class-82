import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
  return (
    <div className="Menu">
      <NavLink to="/api/all">all products</NavLink>
      <span> | </span>
      <NavLink to="/api/units">update quantity</NavLink>
    </div>
  );
}

export default Menu;
