import searchData from "./searchDataReducer";
import marketOpen from "./marketOpen";
import portfolio from "./portfolio";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  portfolio,
  searchData,
  marketOpen,
});

export default rootReducer;
