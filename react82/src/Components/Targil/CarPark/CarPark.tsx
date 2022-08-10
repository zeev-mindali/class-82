import { SyntheticEvent, useState } from "react";
import CarParkItem from "../CarParkItem/CarParkItem";
import "./CarPark.css";

function CarPark(): JSX.Element {
    const carList = [
        {parkNum:1,carNumber:1113334,carOwner:"Zeev",carFlat:22,ownerPhone:"052-404-3142"},
        {parkNum:2,carNumber:6586633,carOwner:"Dudi",carFlat:18,ownerPhone:"050-232-7802"},
        {parkNum:3,carNumber:30452198,carOwner:"Maya",carFlat:20,ownerPhone:"055-555-5555"},
        {parkNum:4,carNumber:0,carOwner:"none",carFlat:0,ownerPhone:""},
        {parkNum:5,carNumber:0,carOwner:"none",carFlat:0,ownerPhone:""},
        {parkNum:6,carNumber:0,carOwner:"none",carFlat:0,ownerPhone:""},
        {parkNum:7,carNumber:0,carOwner:"none",carFlat:0,ownerPhone:""},
        {parkNum:8,carNumber:0,carOwner:"none",carFlat:0,ownerPhone:""},
        {parkNum:9,carNumber:0,carOwner:"none",carFlat:0,ownerPhone:""},
        {parkNum:10,carNumber:0,carOwner:"none",carFlat:0,ownerPhone:""},
    ];

    const [parkNum,setParkNum] = useState(0);
    const [carNum,setCarNum] = useState(0);
    const [carOwner,setCarOwner] = useState("");  
    const [carFlat,setCarFlat] = useState(0);
    const [ownerPhone,setOwnerPhone] = useState("");

    const changeParkNum = (args:SyntheticEvent)=>{
        setParkNum(Number((args.target as HTMLInputElement).value));
    }

    const updateCar = ()=>{}
    return (
        <div className="CarPark">
			<h1>Car Parking system</h1><hr/>
            <div className="Box">
                <input type="number" placeholder="parking number..." onChange={changeParkNum}/><br/><br/>
                <input type="number" placeholder="car number..."/><br/><br/>
                <input type="text" placeholder="car owner..."/><br/><br/>
                <input type="number" placeholder="car flat..."/><br/><br/>
                <input type="text" placeholder="owner number..."/><br/><br/><br/>
                <input type="button" value="update car" onClick={updateCar}/>
            </div><br/><br/>
            {carList.map(item=><CarParkItem key={item.parkNum} parkNum={item.parkNum} carNumber={item.carNumber} carOwner={item.carOwner} carFlat={item.carFlat} ownerPhone={item.ownerPhone}/>)}
        </div>
    );
}

export default CarPark;
