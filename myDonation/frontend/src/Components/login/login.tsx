import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login(): JSX.Element {
  const [userName, setName] = useState("");
  const [userPass, setPass] = useState("");
  const navigate = useNavigate();

  return (
    <div className="login">
      <h1>Login</h1>
      <hr />
      <input
        type="text"
        placeholder="Enter userName..."
        onChange={(args) => setName(args.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Enter password..."
        onChange={(args) => setPass(args.target.value)}
      />
      <br />
      <br />
      <input
        type="button"
        value="login"
        onClick={() => {
          const body = { userName: userName, userPass: userPass };
          if (userName === "admin" && userPass === "123456") {
            navigate("/admin");
          } else {
            axios
              .post("localhost/api/login", body)
              .then((response) => {
                if (response.status === 200) {
                  //user credentials is ok
                  navigate("/holydays");
                } else {
                  alert("invalid user credentials");
                }
              })
              .catch((err) => {
                console.log(err);
              });
          }
        }}
      />
      <br />
    </div>
  );
}

export default Login;
