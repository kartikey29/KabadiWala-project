import searchData from "./searchDataReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  searchData,
});

export default rootReducer;
