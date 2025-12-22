import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    addToWishlist: (state, action) => {
      const key =
        action.payload.id ||
        action.payload._id ||
        action.payload.title;

      const exists = state.find(
        (item) =>
          (item.id || item._id || item.title) === key
      );

      if (!exists) {
        state.push({
          ...action.payload,
          _wishlistKey: key,
        });
      }
    },

    removeFromWishlist: (state, action) => {
      return state.filter(
        (item) =>
          (item.id || item._id || item.title) !== action.payload
      );
    },
  },
});

export const { addToWishlist, removeFromWishlist } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
