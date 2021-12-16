import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { endpoints } from "../../config/constants";

export const logInUser = createAsyncThunk(
  "user/logInUser",
  async ({ username, password }) => {
    const body = `${"username"}=${encodeURIComponent(
      username
    )}&${"password"}=${encodeURIComponent(password)}`;

    const url = `${process.env.HOST}${endpoints.login()}`;

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

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async ({ username, password, email, first_name, last_name }) => {
    const body = `${"username"}=${encodeURIComponent(
      username
    )}&${"password"}=${encodeURIComponent(
      password
    )}&${"email"}=${encodeURIComponent(
      email
    )}&${"first_name"}=${encodeURIComponent(
      first_name
    )}&${"last_name"}=${encodeURIComponent(last_name)}`;

    const url = `${process.env.HOST}${endpoints.register()}`;

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
    [registerUser.pending]: (state, action) => {
      state.loading = true;
      state.error = false;
      state.user = null;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
      state.user = action.payload;
    },
    [registerUser.rejected]: (state, action) => {
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
