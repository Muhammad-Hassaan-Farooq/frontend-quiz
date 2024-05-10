import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  isAuthenticated: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
    removeToken: (state) => {
      state.token = "";
      state.isAuthenticated = false;
    },
  },
});

export const { setToken, removeToken } = appSlice.actions;
export default appSlice;
