import React from "react";
import "./DisplayTable.css";

const DisplayTable = (props) => {
  return (
    <div className="table">
      <table id="Students">
        <tr>
          <th>ID</th>
          <th>Photo</th>
          <th>Title</th>
        </tr>
        {props.data.lengh === 0 ? (
          <h1>Not Found</h1>
        ) : (
          props.data.map((value) => (
            <tr key={value?.id}>
              <td>{value?.id}</td>
              <td>
                <img src={value?.url} style={{ width: "20px" }} />
              </td>
              <td>{value?.title}</td>
            </tr>
          ))
        )}
      </table>
    </div>
  );
};

export default DisplayTable;
