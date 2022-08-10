import MyData from "../../MyComponents/MyData/MyData";
import NewLogin from "../../MyComponents/NewLogin/NewLogin";
import SearchCar from "../../MyComponents/SearchCar/SearchCar";
import CarPark from "../../Targil/CarPark/CarPark";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import "./MainLayout.css";

function MainLayout(): JSX.Element {
    return (
        <div className="MainLayout">
			<header><Header/></header>
            <aside><Menu/></aside>
            <main><CarPark/></main>
            <footer><Footer/></footer>
        </div>
    );
}

export default MainLayout;
