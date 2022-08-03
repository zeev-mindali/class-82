import { SyntheticEvent, useState } from "react";
import "./Login.css";

function Login(): JSX.Element {

    const [uName,setUser] = useState("");
    const myButton = ()=>{
        alert("Hello!");
    }

    const resetMe = ()=>{
        setUser("");
    };
    

    //for getting the object which we need to reffer to it
    //SyntheticEvent -> taking events from the virtual dom
    const changeUser = (args:SyntheticEvent)=>{
        //but we get the args as any !!!
        //we need to convert it to HTMLInputElement so we can get the value
        //syntax args.target => the target which create the event
        //and convert it to HTMLInputElement
        let myValue = (args.target as HTMLInputElement).value;
        console.log(myValue);
        setUser(myValue);
    };

    return (
        <div className="Login Box" >
			<h1>Login Form</h1>
            <input type="text" placeholder="User name.." id="userName" onChange={changeUser} value={uName}/><br/><br/>
            <input type="password" placeholder="Password..." id="password"/><br/><br/>            
            <input type="checkbox" id="rememberMe"/>rememeber me<br/><br/>
            <input type="button" value="login" onClick={myButton}/><input type="button" value="reset" onClick={resetMe}/>
            {/*<div id="res">{uName}</div><br/><br/>*/}
        </div>
    );
}

export default Login;
