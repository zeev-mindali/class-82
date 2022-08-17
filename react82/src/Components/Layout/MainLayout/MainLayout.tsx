import { BrowserRouter } from "react-router-dom";
import MyData from "../../MyComponents/MyData/MyData";
import NewLogin from "../../MyComponents/NewLogin/NewLogin";
import SearchCar from "../../MyComponents/SearchCar/SearchCar";
import WebRoute from "../../Routing/WebRoute/WebRoute";
import CarPark from "../../Targil/CarPark/CarPark";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import "./MainLayout.css";

function MainLayout(): JSX.Element {
    return (
        <div className="MainLayout">
            <BrowserRouter>
                <header><Header/></header>
                <aside><Menu/></aside>
                <main><WebRoute/></main>
                <footer><Footer/></footer>
            </BrowserRouter>
        </div>
    );
}

export default MainLayout;
