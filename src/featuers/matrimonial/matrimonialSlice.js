import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPesrons = createAsyncThunk("fetchPesrons", async () => {
  try {
    const response = await fetch("http://localhost:3004/persons");
    const data = await response.json();
    console.log("data>>>", data);
    return data;
  } catch (error) {}
});

export const matrimonialSlice = createSlice({
  name: "matrimonial",
  initialState: {
    loading: false,
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchPesrons.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchPesrons.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      console.log(action.payload);
    },
  },
});

export const matrimonialReducer = matrimonialSlice.reducer;
