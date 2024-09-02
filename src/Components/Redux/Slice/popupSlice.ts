import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PopupState {
  openPortfolio: boolean;
  openRegister: boolean;
}

const initialState: PopupState = {
  openPortfolio: false,
  openRegister: false,
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    setOpenPortfolio: (state, action: PayloadAction<boolean>) => {
      console.log(
        "setOpenCreate action triggered with payload:",
        action.payload
      );
      state.openPortfolio = action.payload;
    },
    setOpenRegister: (state, action: PayloadAction<boolean>) => {
      state.openRegister = action.payload;
    },
  },
});

export const { setOpenPortfolio, setOpenRegister } = popupSlice.actions;

export default popupSlice.reducer;
