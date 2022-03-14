import Button from "@mui/material/Button";

const Btn = (props) => {
  return (
    <Button type={props.type} variant="contained">
      {props.name}
    </Button>
  );
};

export default Btn;
