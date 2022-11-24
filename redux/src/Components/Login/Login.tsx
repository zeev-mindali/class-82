import { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthActionType, AuthState, UserLoginAction, UserType } from "../../redux/AuthRedux";
import { store } from "../../redux/store";
import "./Login.css";

function Login(): JSX.Element {
    const [userName, setUser] = useState("");
    const [userPass, setPass] = useState("");
    const navigate = useNavigate();

    const userChange = (args:SyntheticEvent)=>{
        const uName = (args.target as HTMLInputElement).value;
        setUser(uName);
    }

    return (
        <div className="Login">
			<h1>Login Screen</h1><hr/>
            <input type="text" placeholder="enter user name..." onChange={userChange}/><br/><br/>
            <input type="password" placeholder="enter user password..." onChange={(args)=>setPass(args.target.value)
            }/><br/><br/>
            <input type="button" value="login" onClick={()=>{
                //check user name and password against DB
                const authState = new AuthState();
                authState.userName=userName;
                authState.userRole=userName==="admin"?UserType.admin:UserType.user;
                
                store.dispatch(UserLoginAction(authState));
                navigate("/");
            }}/>
        </div>
    );
}

export default Login;
