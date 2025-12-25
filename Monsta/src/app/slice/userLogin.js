import Cookies from "js-cookie";

const { createSlice } = require("@reduxjs/toolkit");

export let userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: Cookies.get("USER") ? JSON.parse(Cookies.get("USER")) : null,
    token: Cookies.get("TOKEN") ? Cookies.get("TOKEN") : "",
  },
  reducers: {
    userData: (state, reqData) => {
      let { payload } = reqData; //{data,token}
      state.userInfo = payload.data;
      state.token = payload.token;
      Cookies.set("USER", JSON.stringify(state.userInfo));
      Cookies.set("TOKEN", state.token);
    },
    logOut: (state) => {
      state.userInfo = null;
      state.token = "";
      Cookies.remove("USER");
      Cookies.remove("TOKEN");
    },
  },
});
export const { userData, logOut } = userSlice.actions;
export default userSlice.reducer;
