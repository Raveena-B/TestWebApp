import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Create from "./Create";
import Display from "./Display";
import Update from "./Update";
import Default from "./Default";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Default />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/display" element={<Display />}></Route>
          <Route path="/update" element={<Update />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
