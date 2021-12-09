import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = process.env.HOST;

export const logInUser = createAsyncThunk(
  "user/logInUser",
  async ({ username, password }) => {
    //TODO: make post request
    const response = await fetch(url);
    if (response.ok) return await response.json();
    throw new Error("Rejected");
  }
);

const UserSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: false,
    error: false,
  },
  reducers: {
    initUser(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: {
    [logInUser.pending]: (state, action) => {
      state.loading = true;
      state.error = false;
      state.user = undefined;
    },
    [logInUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
      state.user = action.payload;
    },
    [logInUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.user = undefined;
    },
  },
});

export const selectUser = (state) => state.user.user;
export const selectUserError = (state) => state.user.error;
export const selectUserLoading = (state) => state.user.loading;

export const { initUser } = UserSlice.actions;

export default UserSlice.reducer;
