
import { Typography, TextField, Button, ButtonGroup } from "@material-ui/core";
import { AccountBox, CheckBox, ContactPhone } from "@material-ui/icons";

import "./NewLogin.css";

function NewLogin(): JSX.Element {
    //npm i @material-ui/core --legacy-peer-deps  
    //npm i @material-ui/icons --legacy-peer-deps 
    return (
        <div className="NewLogin Box">
			<Typography variant="h4" className="HeadLine">System Login</Typography>
            <AccountBox style={{fontSize:40, margin: 10}}/>
            <TextField label="user name" variant="outlined" inputProps={{ style: { color: "white" }}}/><br/><br/>
            <ContactPhone style={{fontSize:40, margin:10}}/>
            <TextField label="password" type="password"/><br/><br/>
            <CheckBox/>remember me<br/><br/>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button color="primary">Send</Button>
                <Button color="secondary">cancel</Button>
            </ButtonGroup>
        </div>
    );
}

export default NewLogin;
