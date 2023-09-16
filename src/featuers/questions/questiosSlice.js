import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchQuestions = createAsyncThunk("fetchQuestions", async () => {
  try {
    const response = await fetch("http://localhost:3004/questions");
    const questions = response.json();
    return questions;
  } catch (error) {
    console.log("error", error);
  }
});

const questionsSlice = createSlice({
  name: "questions",
  initialState: {
    loading: false,
    data: [],
    error: null,
  },
  extraReducers: {
    [fetchQuestions.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchQuestions.fulfilled]: (state, action) => {
      console.log("action>>>", action);
      state.loading = false;
      state.data = action.payload;
    },
  },
});

export const questionsReducer = questionsSlice.reducer;
