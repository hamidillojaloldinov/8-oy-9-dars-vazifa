import { createSlice } from "@reduxjs/toolkit";

// function dataFromLocalStorage() {
//   return (
//     JSON.parse(localStorage.getItem("user")) || {
//       user: null,
//       isAuthState: false,
//     }
//   );
// }
let initialState = {
  user: null,
  isAuthState: false,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.user = payload;
      // localStorage.setItem("user", JSON.stringify(state));
    },
    logout: (state) => {
      state.user = null;
      // localStorage.setItem("user", JSON.stringify(state));
    },
    isAuthChange: (state) => {
      state.isAuthState = true;
      // localStorage.setItem("user", JSON.stringify(state));
    },
  },
});

export const { isAuthChange, login, logout } = userSlice.actions;
export default userSlice.reducer;
