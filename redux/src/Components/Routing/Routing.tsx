import { Route, Router, Routes } from "react-router-dom";
import App from "../../App";
import Admin from "../Admin/Admin";
import Guest from "../Guest/Guest";
import Login from "../Login/Login";
import User from "../User/User";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/admin" element={<Admin/>}/>
                <Route path="/user" element={<User/>}/>
                <Route path="/guest" element={<Guest/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="*" element={<App/>}/>
            </Routes>
        </div>
    );
}

export default Routing;
