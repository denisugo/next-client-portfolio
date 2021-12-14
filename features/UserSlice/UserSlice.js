import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = `${process.env.HOST}/login`;

export const logInUser = createAsyncThunk(
  "user/logInUser",
  async ({ username, password }) => {
    const body = `${encodeURIComponent("username")}=${encodeURIComponent(
      username
    )}&${encodeURIComponent("password")}=${encodeURIComponent(password)}`;

    const fetchedUser = await fetch(url, {
      method: "POST",
      credentials: "include",
      body,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    });

    if (!fetchedUser.ok) throw new Error("Rejected");

    const user = await fetchedUser.json();

    return user;
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
      state.user = null;
    },
    [logInUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
      state.user = action.payload;
    },
    [logInUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.user = null;
    },
  },
});

export const selectUser = (state) => state.user.user;
export const selectUserError = (state) => state.user.error;
export const selectUserLoading = (state) => state.user.loading;

export const { initUser } = UserSlice.actions;

export default UserSlice.reducer;
