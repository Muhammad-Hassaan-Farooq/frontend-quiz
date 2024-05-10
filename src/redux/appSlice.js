import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiZjMxNGQ1Yzk4ZjQyMWJiYmY5ZWE2ZGE2ZDk1OGM2N2YzY2JkZjEzYTk5MTc2MjFiMGMyYjE5MjdiNmUwNWIzMzg3YjQ3YjUxNWFiMjE2NDkiLCJpYXQiOjE3MTUzNDI1NTEuNzc4OTYzLCJuYmYiOjE3MTUzNDI1NTEuNzc4OTY1LCJleHAiOjE3NDY4Nzg1NTEuNzU3NTQ1LCJzdWIiOiIyNDk3Iiwic2NvcGVzIjpbXX0.sBg3NJg6nCgXTsLA8XCn_U3wcN5gBoCHVH5BHNo6tDKJe1BimQ04MM5lUNki0SoLcsZpxc3Z2L13BzJY8m8ZaRQV9vvrmtQDzhwZ3YSm5Siy12w-6IPsitbAKYr8MckLP_5_UTI-gpLxjNPfT5LPI-2C_WtkqCTFZC5FWFEi82UVU7eXjxcAwkga3os-W06PA3XioGBWoPpqiEQw8zi8f5MeOhB5qGFBAyS7l8Mfj6Zc_iCGVrppOYSj_bXL-j4RarcWCJfTnYrkUf5_Hmln2MEbRDXW6y2PmPC9Y7QT9hHMlZrJAi8f2EwXFMm77magIzg2NQx0i3DQIa2QzG-iqSjUNWKTg9QajLz9sWPGO7JlC5HWh2B9H9HmoHFxRuXowJf1TE69KVVz87tkpSRfgI0XVjD_ThY1n_ljCBq6acbVvhwlaS8-YtFdGSNyRiNGnH1rILkBs0hcpkU6O5YOTipqU4MbFTM6he7I50A8xg1tZrHqHtHDFioEiddlO1mOifhX5aGML3NAcCT5PZLTX8PiM72DGSnkrHdJT1aakLjPwdMrnCmQkE6BMx1iAoRAFIEBgo8ZfPGrekI_9JWmpCAUtfdWjpgo9NFIt7MLtia7qeKIKAg5RuYUn3ovHTQ7rwUQB9EkudLE5RNPCEI9XI3pd135bX3gAaj67XrpWGI",
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
