import "./CarParkItem.css";

interface CarParkItemProps {
	parkNum:number;
    carNumber:number;
    carOwner:string;
    carFlat:number;
    ownerPhone:String;
}
// {parkNum:1,carNumber:0,carOwner:"none",carFlat:0,ownerPhone:""},
function CarParkItem(props: CarParkItemProps): JSX.Element {
    return (
        <div className="CarParkItem Box">
			<h1>{props.carNumber}</h1><hr/>
            {props.parkNum}<br/>
            {props.carOwner}<br/>
            {props.carFlat}<br/>
            {props.ownerPhone}<br/>
        </div>
    );
}

export default CarParkItem;
