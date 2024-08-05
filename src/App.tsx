import React from "react";
import "./App.css";
import { Login } from "./Components/Login/Login";
import { Register } from "./Components/Register/Register";

function App() {
  return (
    <div className="App">
      <Login />
      <Register />
    </div>
  );
}

export default App;
