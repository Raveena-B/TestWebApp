import React, { useState, useEffect } from "react";
import DisplayTable from "./DisplayTable";
import axios from "axios";

const Display = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () =>
      await axios
        .get("https://jsonplaceholder.typicode.com/photos")
        .then((res) => setData(res.data))
        .catch(() => null))();
  }, []);

  const newData = data.slice(0, 10);
  return (
    <div>
      <DisplayTable data={newData} />
    </div>
  );
};

export default Display;
