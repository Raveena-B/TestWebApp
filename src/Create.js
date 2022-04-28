import React from "react";
import "./App.css";
import "./Create.css";

const Create = () => {
  return (
    <div className="form">
      <form
        style={{
          width: "50%",
          margin: "center",
          marginLeft: "350px",
          marginTop: 0,
          marginRight: "100px",
          display: "block",
          background: "black",
          borderRadius: "10px",
          padding: " 10px 10px 10px 10px",
          opacity: "0.7",
        }}
      >
        <div className="cmb-3">
          <label for="Name" className="Components">
            Name
          </label>
          <br />
          <br />
          <input type="text" placeholder="Enter the Name" />
          <br />
          <br />
          <label for="Age" className="Components">
            Age
          </label>
          <br />
          <br />
          <input type="text" placeholder="Enter the Age" />
          <br />
          <br />
          <div>
            <label className="radio">Gender</label>
            <br />
            <input type="radio" checked />
            &nbsp;
            <label className="radio">Male</label>
            <input type="radio" />
            <label className="radio">Female</label>
            <br />
          </div>

          <div></div>
        </div>

        <br />

        <br />
        <br />
      </form>
    </div>
  );
};
export default Create;
