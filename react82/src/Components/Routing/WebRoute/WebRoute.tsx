import { Route, Routes } from "react-router-dom";
import Coins from "../../crypto/Coins/Coins";
import Main from "../../Layout/Main/Main";
import Login from "../../MyComponents/Login/Login";
import NewLogin from "../../MyComponents/NewLogin/NewLogin";
import SearchCar from "../../MyComponents/SearchCar/SearchCar";
import CarPark from "../../Targil/CarPark/CarPark";
import Page404 from "../Page404/Page404";

function WebRoute(): JSX.Element {
    return (
        <div className="WebRoute">
           <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/newlogin" element={<NewLogin/>}/>
                <Route path="/searchCar" element={<SearchCar/>}/>
                <Route path="/parking" element={<CarPark/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/coins" element={<Coins/>}/>
                <Route path="*" element={<Page404/>}/>
           </Routes>
        </div>
    );
}

export default WebRoute;
