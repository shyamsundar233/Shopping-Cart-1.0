import { createSlice } from "@reduxjs/toolkit";

const testSlice = createSlice({
  name: "testSlice",
  initialState: { counter: [0, 1, 2, 3] },
  reducers: {},
});

export default testSlice.reducer;
