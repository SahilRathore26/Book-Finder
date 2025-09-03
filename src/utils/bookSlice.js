import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "book",
  initialState: {
    items: null,
  },
  reducers: {
    setBooks: (state, action) => {
      state.items = action.payload;
    },
    removeBooks: (state, action) => {
      state.items = null;
    }
  },
});

export const { setBooks, removeBooks } = bookSlice.actions;
export default bookSlice.reducer;