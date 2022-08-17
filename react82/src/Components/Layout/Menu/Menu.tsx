import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {

    /*
    const mainMenu = ()=>{
        return(<>
            Main Menu<hr/>
            Main Page<br/>
            Search Car <br/>
            Parking <br/>
            <a href="http://localhost:3000/login">Login</a><br/>
            Adv. Login<br/>   
        </>
        );
    }
    */

    /* test for snir */
    const mainMenu = ()=>{
        return(<>
            Main Menu<hr/>
            <NavLink to="/">Main Page</NavLink><br/>
            {/*<NavLink to="/searchCar">Search Car</NavLink> <br/>*/}
            <NavLink to="/parking">Parking </NavLink><br/>
            <NavLink to="/login">Login</NavLink><br/>
            <NavLink to="/newlogin">Adv. Login</NavLink><br/>   
        </>
        );
    }

    const guestMenu = ()=>{
        return(<>
            <h2>Hello guest</h2>
            <a href="localhost:3000/login">Login</a><br/>
        </>);
    }

    return (
        <div className="Menu">
			{mainMenu()}    
            {/*guestMenu()*/}
        </div>
    );
}

export default Menu;
