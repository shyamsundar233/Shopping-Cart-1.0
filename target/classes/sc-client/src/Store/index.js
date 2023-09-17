import { configureStore, createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "item",
  initialState: { item: 0 },
  reducers: {
    inc(state, action) {
      state.item++;
    },
  },
});

const store = configureStore({
  reducer: itemSlice.reducer,
});

export default store;
