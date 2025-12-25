import cartSlice  from "../slice/cartSlice";
import userReducer from "../slice/userLogin";

const { configureStore } = require("@reduxjs/toolkit");



export let store=configureStore(
    {
    reducer:{
        user:userReducer,
        cart:cartSlice
    }
}
)