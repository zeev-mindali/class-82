import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserType } from "../../redux/AuthRedux";
import { store } from "../../redux/store";
import "./Admin.css";

function Admin(): JSX.Element {
    const navigate = useNavigate();
    useEffect(()=>{
        if (store.getState().auth.userRole !== UserType.admin){
            navigate("/login");
        }
    },[]);
    return (
        <div className="Admin">
			<h1>Admin screen</h1><hr/>
        </div>
    );
}

export default Admin;
