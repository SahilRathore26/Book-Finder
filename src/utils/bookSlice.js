import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "book",
  initialState: {
    items: null,
    loading: false,
  },
  reducers: {
    setBooks: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },
    startLoading: (state, action) => {
      state.items = action.payload;
      state.loading = true;
    },
    removeBooks: (state, action) => {
      state.items = null;
    }
  },
});

export const { setBooks, removeBooks, startLoading } = bookSlice.actions;
export default bookSlice.reducer;