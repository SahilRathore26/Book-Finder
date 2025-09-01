import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "book",
  initialState: {
    items: [],
  },
  reducers: {
    setBooks: (state, action) => {
      state.items = action.payload;
    },
    removeBooks: (state, action) => {
      state.items = [];
    }
  },
});

export const { setBooks, removeBooks } = bookSlice.actions;
export default bookSlice.reducer;