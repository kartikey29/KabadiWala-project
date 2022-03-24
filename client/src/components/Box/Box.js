import classes from "./Box.module.css";
import api from "../../config/api";
import React, { useEffect, useState } from "react";
import Loading from "../UI/Loading";

const Box = (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // "https://c883b05e-97a0-4b43-92f6-a3c0276c5f4e.mock.pstmn.io/nifty50"
    const data = async () => {
      try {
        const response = await api.get(`/${props.type}`);
        setData(response.data.body);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    data();
    return () => {
      setLoading(true);
    };
  }, []);

  return (
    <div className={classes.box}>
      {loading ? (
        <Loading />
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
