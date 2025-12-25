import axios from "axios";
import Cookies from "js-cookie";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

let baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export const fetchCarts = createAsyncThunk("cart/fetchCarts", async () => {
    const response = await axios.post(`${baseUrl}cart/view-cart`,{},{
        headers:{
            Authorization:`Bearer ${Cookies.get("TOKEN")}`
        }
    });
    console.log("Hello Cart", response.data.cartItems)
    return response?.data.cartItems
})
export let cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    cartData: (state, reqData) => {},
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchCarts.fulfilled, (state, action) => {
      // Add user to the state array
      state.cart = action.payload;
    });
  },
});
export const { cartData } = cartSlice.actions;
export default cartSlice.reducer;

