import { combineReducers } from "@reduxjs/toolkit";
import itemReducer from "./item/itemReducer";

const rootReducer = combineReducers({
  item: itemReducer,
});

export default rootReducer;
