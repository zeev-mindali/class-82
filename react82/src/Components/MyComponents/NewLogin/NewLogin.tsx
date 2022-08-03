import { AccountBox, CheckBox, Password } from "@mui/icons-material";
import { Button, ButtonGroup, TextField, Typography } from "@mui/material";
import "./NewLogin.css";

function NewLogin(): JSX.Element {
    return (
        <div className="NewLogin Box">
			<Typography variant="h4" className="HeadLine">System Login</Typography>
            <AccountBox style={{fontSize:40, margin: 10}}/>
            <TextField label="user name" variant="outlined" inputProps={{ style: { color: "white" }}}/><br/><br/>
            <Password style={{fontSize:40, margin:10}}/>
            <TextField label="password" type="password"/><br/><br/>
            <CheckBox/>remember me<br/><br/>
            <ButtonGroup variant="contained" fullWidth>
                <Button color="primary">Send</Button>
                <Button color="secondary">cancel</Button>
            </ButtonGroup>
        </div>
    );
}

export default NewLogin;
