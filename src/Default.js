import React from "react";
import "./Default.css";
import { Link } from "react-router-dom";

const Default = () => {
  return (
    <div className="background">
      <Link to="/home">
        <center>
          <button
            className="btn"
            style={{
              margintop: "10px",
            }}
          >
            Get Started
          </button>
        </center>
      </Link>
    </div>
  );
};

export default Default;
