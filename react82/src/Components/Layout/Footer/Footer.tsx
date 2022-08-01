import { useEffect, useState } from "react";
import "./Footer.css";

function Footer(): JSX.Element {
    const madeByArray = ["Zeev","Eden","Haron","Elior","Noa","Geni","Maya","Amit","Dolev","Daniel"];
    let madeBy = madeByArray[0];
   
    return (
        <div className="Footer">
			all right &reg; is reseved to {madeBy}
        </div>
    );
}

export default Footer;
