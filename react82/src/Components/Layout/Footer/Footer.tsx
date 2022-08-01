import { useEffect, useState } from "react";
import "./Footer.css";

function Footer(): JSX.Element {
    const madeByArray = ["Zeev","Eden","Haron","Elior","Noa","Geni","Maya","Amit","Dolev","Daniel"];
    let madeBy = madeByArray[0];
    setInterval(()=>{
        const index = Math.floor(Math.random()*madeByArray.length);
        madeBy = madeByArray[index];
        console.log(index);
    },1000);
    return (
        <div className="Footer">
			all right &reg; is reseved to {madeBy}
        </div>
    );
}

export default Footer;
