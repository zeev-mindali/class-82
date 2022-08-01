import { useEffect, useState } from "react";
import "./Header.css";

function Header(): JSX.Element {
    // we have a tuple (צמד) with two items
    // first item refer to the variable name
    // second item refer to the function for updating the variable.
    //      var     fun          init
    const [myTime,setHeaderTime] = useState("");
    //let myTime = "";

    //load once when component is mounted and do not create new interval
    //when we render the component again
    //useEffect()
    //useEffect(()=>{},[])
    useEffect(()=>{
        setInterval(()=>{
            //myTime = new Date().toLocaleTimeString();
            setHeaderTime(new Date().toLocaleTimeString());
            console.log("render");
            },1000);
    },[])
   
    
    return (
        <div className="Header">
            
			<h1>{myTime}</h1>
        </div>
    );
}

export default Header;
