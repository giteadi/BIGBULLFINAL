import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      console.log("User set:", state.user); // Log user data
    },
    clearUser: (state) => {
      state.user = null;
      console.log("User cleared"); // Log when user is cleared
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
