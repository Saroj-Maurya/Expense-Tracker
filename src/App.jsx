import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css"
import Navbar from "./components/Navbar";
import ExpenseApp from "./components/ExpenseApp";
import Footer from "./components/Footer";



function App() {
  

  return (
    <>
      <Navbar/>
      <ExpenseApp/>
      <Footer/>

    </>
  );
}

export default App;
