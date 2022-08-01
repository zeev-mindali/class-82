import { useState } from "react";
import "./Header.css";

function Header(): JSX.Element {
    // we have a tuple (צמד) with two items
    // first item refer to the variable name
    // second item refer to the function for updating the variable.
    //      var     fun          init
    const [myTime,setHeaderTime] = useState("");
    //let myTime = "";
    setInterval(()=>{
        //myTime = new Date().toLocaleTimeString();
        setHeaderTime(new Date().toLocaleTimeString());
    },1000);
    return (
        <div className="Header">
			<h1>{myTime}</h1>
        </div>
    );
}

export default Header;
