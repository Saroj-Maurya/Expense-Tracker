import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ExpenseApp from "./components/ExpenseApp";


function App() {
  

  return (
    <>
      <Navbar/>
      <ExpenseApp/>
    </>
  );
}

export default App;
