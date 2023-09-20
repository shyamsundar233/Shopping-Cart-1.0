import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loadItems = () => async (dispatch) => {
  axios.get("http://localhost:8081/api/items").then((resp) => {
    dispatch(itemActions.postItems(resp.data));
  });
};

const itemSlice = createSlice({
  name: "item",
  initialState: { items: [], item: {} },
  reducers: {
    postItems(state, action) {
      state.items = action.payload;
    },
  },
});

export const itemActions = itemSlice.actions;
export default itemSlice.reducer;
