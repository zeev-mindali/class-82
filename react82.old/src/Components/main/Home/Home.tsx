import Specials from "../../home/specials/specials";
import Zeev from "../../home/Zeev/Zeev";
import User from "../User/User";
import "./Home.css";

function Home(): JSX.Element {
    let userName="Zeev";
    let stam = [1,2,3,4,5]
    return (
        <div className="Home">
			<h1>Hello Class 82</h1><hr/>
            <User/><br/>
            <Specials/><br/>
            {stam.map(item=><Zeev/>)}
        </div>
    );
}

export default Home;
