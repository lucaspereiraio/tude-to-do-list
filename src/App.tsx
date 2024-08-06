import React from "react";
import "./App.css";
import { Login } from "./Components/Login/Login";
import { Register } from "./Components/Register/Register";
import { Header } from "./Components/Header/Header";
import { CreateItem } from "./Components/CreateItem/CreateItem";

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <Register />
      <CreateItem />
    </div>
  );
}

export default App;
