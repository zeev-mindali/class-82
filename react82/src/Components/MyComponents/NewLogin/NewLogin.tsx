import { Password, Person } from "@mui/icons-material";
import { Button, ButtonGroup, Checkbox, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import UserCred from "../../../Modal/userCred";
import notify from "../../../utils/Notify";
import "./NewLogin.css";

function NewLogin(): JSX.Element {
    /* use this method if you need one or two fields max
    const [userName,setUser] = useState("");
    
    const updateUser = (args:SyntheticEvent){
        const target = (args.target as HTMLInputElement).value;
        setUser(target);
    }
    */

    //user:admin , pass:admin

    //מחצין את הפונקציות הרלוונטיות מתוך 
    //useForm()
    const {register , handleSubmit, formState: {errors}}= useForm<UserCred>();

    //נשלח אל הפונקציה הזאת, את הנתונים של הטופס
    const send = (userData:UserCred)=>{
        //notify.success("we submitted the form");
        console.log(userData);
        if (userData.name==="admin" && userData.password==="admin"){
            notify.success("Noa is in the house")
            navigate("/searchCar");
        } else {
            notify.error("oh no it's Or again :(")
        }
        
    }

    const navigate = useNavigate();

    // const logUser = ()=>{
    //     //alert("user logged");  => very bad, if popup is blocked there is no alert
    //     //login is ok...
    //     notify.success("or is in the house")
    //     navigate("/searchCar");
    // }

    return (
        <div className="NewLogin Box">
            <form onSubmit={handleSubmit(send)}>
                <Typography variant="h4" className="HeadLine">System Login</Typography><br/>
                <Person style={{fontSize:40, margin:10}}/>
                <TextField label="user name" variant="outlined"
                inputProps={{sx:{color:"white"}}}
                InputLabelProps={{style:{color:"red"}}}
                {...register("name",{
                    required: {
                        value: true,
                        message: "Please input your name",
                    },
                })}
                /><br/>
                <span>{errors.name?.message}</span>
                <br/><br/>
                <Password style={{fontSize:40, margin:10}}/>
                <TextField label="user password" variant="outlined"
                inputProps={{sx:{color:"white"}}}
                InputLabelProps={{style:{color:"red"}}}
                {...register("password",{
                    required: {
                        value: true,
                        message: "Please input your password",
                    },
                })}/>
                <br/>
                <span>{errors.password?.message}</span>
                <br/><br/>
                <TextField label="user role" variant="outlined"
                inputProps={{sx:{color:"white"}}}
                InputLabelProps={{style:{color:"red"}}}
                {...register("role")}
                /><br/><br/>
                <Checkbox/> Remmeber me?<br/><br/>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button color="primary" type="submit">Login</Button>
                    <Button color="warning">Register</Button>
                    <Button color="secondary">Logout</Button>
                </ButtonGroup>
            </form>
        </div>
    );
}

export default NewLogin;
