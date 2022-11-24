import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { store } from "./redux/store";
import { UserType } from "./redux/AuthRedux";

function App() {
  //first step, enter manual info, and go to correct page

  const navigate = useNavigate();

  //user admin pass admin, kick to admin page..

  useEffect(() => {
    switch (store.getState().auth.userRole) {
      case UserType.guest:
        navigate("/guest");
        break;
      case UserType.user:
        navigate("/user");
        break;
      case UserType.admin:
        navigate("/admin");
        break;
    }
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        it will move to correct window.....
        <br />
        later on, it will be a login screen
      </header>
    </div>
  );
}

export default App;
