import { Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { SyntheticEvent, useState } from "react";
import Car from "../../../Modal/car";
import SingleCar from "../SingleCar/SingleCar";
import "./SearchCar.css";

function SearchCar(): JSX.Element {
    const myUrl = "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&limit=3&q="
    const [carNumber,setNumber] = useState("");
    const [carList,setCarList] = useState([]);
    const numberChange = (args:SyntheticEvent)=>{
        const value = (args.target as HTMLInputElement).value;
        //console.log(value);
        setNumber(value);
        //console.log(value);
    }

    const getCarData_v1 = async ()=>{             
        const result = await axios.get(myUrl+carNumber);
        console.log(result.data.result.records);
    }


    const getCarData_v2 = ()=>{
        let tempCarList:Car[] = [];
        axios.get(myUrl+carNumber)
        .then(response=>{
            //myCars.map((item)=>item.tozeret_nm);
            response.data.result.records.map((item: { 
                mispar_rechev:string ,tozeret_nm: string; kinuy_mishari:string; 
                tokef_dt:string; _id:number;shnat_yitzur:string;tzeva_rechev:string})=>{
                let singleCar = new Car(item.tozeret_nm,item.kinuy_mishari,item.shnat_yitzur,item.tzeva_rechev,item.tokef_dt,item.mispar_rechev);
                tempCarList.push(singleCar);
            });
            console.log(carList);
            setCarList(tempCarList);
        })
        .catch(err=>{
            console.log(err);
        });
    }

    return (
        <div className="SearchCar">
			<div className="Box">
                <Typography variant="h5" className="HeadLine">Car Search</Typography>
                <hr/>
                <TextField label="car number" variant="outlined"
                inputProps={{sx:{color:"white"}}}
                InputLabelProps={{style:{color:"red"}}}
                onChange={numberChange}
                /><br/>
                <Button color="primary" onClick={getCarData_v2}>Search</Button>                
            </div>
            <br/>
            {carList.map(item=> <SingleCar key={item._id} tozeret_nm={item.tozeret_nm} kinuy_mishari={item.kinuy_mishari} mispar_rechev={item.mispar_rechev} tokef_dt={item.tokef_dt} />)}
        </div>
    );
}

export default SearchCar;


/*
    <SingleCar key={item._id} tozeret_nm={item.tozeret_nm} kinuy_mishari={item.kinuy_mishari} mispar_rechev={item.mispar_rechev} tokef_dt={item.tokef_dt} />
*/