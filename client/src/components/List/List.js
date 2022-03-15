import React from "react";
import classes from "./List.module.css";

const List = () => {
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

export default List;
