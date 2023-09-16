import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const response = await fetch("http://localhost:3004/users");
    const users = await response.json();
    console.log(users);
    return users;
  } catch (error) {}
});

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    loading: false,
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchUsers.pending]: (state, acttion) => {
      state.loading = true;
      state.error = null;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
  },
});

export default usersSlice.reducer;
