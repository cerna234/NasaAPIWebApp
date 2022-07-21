import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import AsteroidComponent from "./Components/AsteroidsComponent";
import HomePage from "./Pages/HomePage";
import AsteroidsPage from "./Pages/AsteroidsPage";
import MarsPage from "./Pages/MarsPage";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      
    <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/asteroidPage" element={<AsteroidsPage/>} />
        <Route path="/marsPage" element={<MarsPage/>} />
    
      </Routes>

      <Footer/>
    </div>
  );
}

export default App