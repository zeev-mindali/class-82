import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserType } from "../../redux/AuthRedux";
import { store } from "../../redux/store";
import "./User.css";

function User(): JSX.Element {
    const navigate = useNavigate();
    useEffect(()=>{
        if (store.getState().auth.userRole !== UserType.user){
            navigate("/login");
        }
    },[]);
    return (
        <div className="User">
			<h1>User screen</h1><hr/>
        </div>
    );
}

export default User;
