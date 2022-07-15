import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from './components/Navbar';
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("lightTheme");

  const toggleMode = () => {
    if (mode === "lightTheme") {
      setMode("darkTheme");
    } else {
      setMode("lightTheme");
    }
  };
  return (
    <>
    <div className={mode}>
        <Router>
        <Navbar toggleMode={toggleMode}>
        </Navbar>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
        </Routes>
      </Router>
    </div>
        
    </>
  );
}

export default App;
