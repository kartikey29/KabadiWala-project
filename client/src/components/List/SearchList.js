import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import classes from "./List.module.css";

const SearchList = () => {
  const [data, setData] = useState();
  const location = useLocation;
  console.log(location.state);
  console.log("hello");
  return (
    <div className={classes.listContainer}>
      <h1>Loosers</h1>
      <ul>
        <li>
          one<span className={classes.percent}>-5%</span>
        </li>
        <li>
          one<span className={classes.percent}>-5%</span>
        </li>
        <li>
          one<span className={classes.percent}>-5%</span>
        </li>
        <li>
          one<span className={classes.percent}>-5%</span>
        </li>
      </ul>
    </div>
  );
};

export default SearchList;
