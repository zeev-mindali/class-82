import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            Main Menu<hr/>
			<a href="#">Find Car</a><br/>
            <a href="#">Find MotorCycle</a><br/>
            <a href="#">Find Truck</a><br/>
            <a href="#">Check HandiCap</a><br/>
            <a href="#">Check OffRoad</a><br/>
            <a href="#">Check Recalls</a><br/>
        </div>
    );
}

export default Menu;
