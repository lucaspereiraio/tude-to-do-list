import React from "react";
import "./App.css";
import { Login } from "./Components/Login/Login";
import { Register } from "./Components/Register/Register";
import { Header } from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Login />
      <Register />
    </div>
  );
}

export default App;
