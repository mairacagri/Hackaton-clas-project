import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import Photos from "./Photos";
import Quiz from "./Quiz";
import Stories from "./Stories";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/client/" element={<Home />} />
        <Route exact path="/client/stories" element={<Stories />} />
        <Route exact path="/client/photos" element={<Photos />} />
        <Route exact path="/client/quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;