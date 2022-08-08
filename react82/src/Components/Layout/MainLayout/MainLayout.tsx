import NewLogin from "../../MyComponents/NewLogin/NewLogin";
import SearchCar from "../../MyComponents/SearchCar/SearchCar";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import "./MainLayout.css";

function MainLayout(): JSX.Element {
    return (
        <div className="MainLayout">
			<header><Header/></header>
            <aside><Menu/></aside>
            <main><SearchCar/></main>
            <footer><Footer/></footer>
        </div>
    );
}

export default MainLayout;
