import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface NavigationState {
  activeMenu: string;
  isMenuOpen: boolean;
}

const initialState: NavigationState = {
  activeMenu: "dashboard",
  isMenuOpen: false,
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setActiveMenu: (state, action: PayloadAction<string>) => {
      state.activeMenu = action.payload;
    },
       toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});
  
export const { setActiveMenu, toggleMenu } = navigationSlice.actions;
export default navigationSlice.reducer;