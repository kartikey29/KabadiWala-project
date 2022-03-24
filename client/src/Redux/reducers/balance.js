const portfolio = (state = 0, action) => {
  switch (action.type) {
    case "GOT_BALANCE_DATA":
      return action.payload.data;
    default:
      return state;
  }
};

export default portfolio;
