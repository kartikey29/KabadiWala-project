import React, { useEffect, useState } from "react";
import classes from "./List.module.css";
import api from "../../config/api";

const List = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      // .get(`/${props.type}`)
      .get("https://f97aec65-2ae6-41d9-9ddb-9d4a0f5082f3.mock.pstmn.io/search")
      .then((res) => {
        const response = res;
        console.log(response);
        setData(response.data.body.allSec.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      setLoading(true);
    };
  }, []);

  const makeList = (element, index) => {
    return (
      <li key={index} id={element.symbol} onClick={handleClick}>
        {element.symbol}
        <span
          className={classes.percent}
          style={
            props.type === "topgain" ? { color: "green" } : { color: "red" }
          }
        >
          {element.perChange}%
        </span>
      </li>
    );
  };

  const handleClick = (event) => {
    console.log(event.target.id);
  };

  return (
    <div className={classes.listContainer}>
      <h1>{props.type === "topgain" ? "Top Gainner" : "Top Lossers"}</h1>
      {loading || !data ? (
        <div> loading...</div>
      ) : (
        <ul>{data.slice(0, 7).map(makeList)}</ul>
      )}
    </div>
  );
};

export default List;
