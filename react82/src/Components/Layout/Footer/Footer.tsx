import { useEffect, useState } from "react";
import "./Footer.css";

function Footer(): JSX.Element {
    const madeByArray = ["Zeev","Eden","Haron","Elior","Noa","Geni","Maya","Amit","Dolev","Daniel"];
    //let madeBy = madeByArray[0];
    const [madeBy,setMade] = useState(madeByArray[0]);

    useEffect(()=>{
        console.log("started changing names....");
         setInterval(()=>{
            setMade(madeByArray[Math.floor(Math.random()*madeByArray.length)]);           
        },1000);
    },[]);
   
    return (
        <div className="Footer">
			all right &reg; is reseved to {git}
        </div>
    );
}

export default Footer;
