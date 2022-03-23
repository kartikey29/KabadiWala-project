import searchData from "./searchDataReducer";
import marketOpen from "./marketOpen";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  searchData,
  marketOpen,
});

export default rootReducer;
