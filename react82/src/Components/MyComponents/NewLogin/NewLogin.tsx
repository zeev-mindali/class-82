import { Password, Person } from "@mui/icons-material";
import { Button, ButtonGroup, Checkbox, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./NewLogin.css";

function NewLogin(): JSX.Element {

    const navigate = useNavigate();

    const logUser = ()=>{

        //login is ok...
        navigate("/searchCar");
    }

    return (
        <div className="NewLogin Box">
			<Typography variant="h4" className="HeadLine">System Login</Typography><br/>
            <Person style={{fontSize:40, margin:10}}/>
            <TextField label="user name" variant="outlined"
             inputProps={{sx:{color:"white"}}}
             InputLabelProps={{style:{color:"red"}}}/><br/><br/>
            <Password style={{fontSize:40, margin:10}}/>
            <TextField label="user password" variant="outlined"
             inputProps={{sx:{color:"white"}}}
             InputLabelProps={{style:{color:"red"}}}/><br/><br/>
            <Checkbox/> Remmeber me?<br/><br/>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button color="primary" onClick={logUser}>Login</Button>
                <Button color="warning">Register</Button>
                <Button color="secondary">Logout</Button>
            </ButtonGroup>
        </div>
    );
}

export default NewLogin;
