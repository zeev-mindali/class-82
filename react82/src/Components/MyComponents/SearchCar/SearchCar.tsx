import { Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { SyntheticEvent, useState } from "react";
import Car from "../../../Modal/car";
import "./SearchCar.css";

function SearchCar(): JSX.Element {
    const myUrl = "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q="
    const [carNumber,setNumber] = useState("");
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
        axios.get<Car>(myUrl+carNumber)
        .then(response=>{
            
            //myCars.map((item)=>item.tozeret_nm);
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
        </div>
    );
}

export default SearchCar;
