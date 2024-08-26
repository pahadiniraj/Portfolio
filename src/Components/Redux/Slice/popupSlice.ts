import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PopupState {
  setOpenPortfolio: boolean;
}

const initialState: PopupState = {
  setOpenPortfolio: false,
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
      state.setOpenPortfolio = action.payload;
    },
  },
});

export const { setOpenPortfolio } = popupSlice.actions;

export default popupSlice.reducer;
