import classes from "./Box.module.css";
import api from "../../config/api";
import React, { useEffect, useState } from "react";

const Box = (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(`/${props.type}`)
      // .get("https://f97aec65-2ae6-41d9-9ddb-9d4a0f5082f3.mock.pstmn.io/nifty50")
      .then((res) => {
        const response = res;
        console.log(response);
        setData(response.data.body);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      setLoading(true);
    };
  }, []);

  return (
    <div className={classes.box}>
      {loading ? (
        <div>loading...</div>
      ) : (
        <>
          <h1>{data.name}</h1>
          <span
            style={
              data.data[0].pChange >= 0 ? { color: "green" } : { color: "red" }
            }
          >
            <h2>
              {data.data[0].lastPrice} <span>({data.data[0].pChange})</span>
            </h2>
          </span>
        </>
      )}
    </div>
  );
};

export default Box;
