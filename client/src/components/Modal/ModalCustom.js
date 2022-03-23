import { Button, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import api from "../../config/api";
import classes from "./ModalCustom.module.css";
import Loading from "../UI/Loading";

const ModalCustom = (props) => {
  const [loading, setLoading] = useState(true);
  const [stockData, setStockData] = useState();
  const [quantity, setQuantity] = useState();
  const [allPrice, setAllPrice] = useState();
  useEffect(() => {
    api
      .get(
        "https://c883b05e-97a0-4b43-92f6-a3c0276c5f4e.mock.pstmn.io/stockdata"
      )
      .then((res) => {
        console.log(res);
        const obj = res.data["Time Series (Daily)"];
        const priceData = obj[Object.keys(obj)[0]];
        setAllPrice(priceData);
        setStockData(Math.round(priceData["4. close"]));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      setLoading(true);
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      symbol: props.title,
      buyPrice: stockData,
      quantity: quantity,
    };
    console.log(data);
    props.handleClose();
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setQuantity(event.target.value);
  };
  return (
    <>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {props.title} {props.info}
          </Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <div className={classes.priceModal}>
              {loading ? (
                <Loading />
              ) : (
                <>
                  <div>Price : {Math.round(stockData)}</div>
                  <div>
                    Quantity{" "}
                    <input
                      onChange={handleChange}
                      type={"number"}
                      max={5}
                      min={1}
                    ></input>
                  </div>
                </>
              )}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-danger" onClick={props.handleClose}>
              close
            </Button>
            <Button type="submit" variant="success">
              Buy
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default ModalCustom;
