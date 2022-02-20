import {configureStore} from "@reduxjs/toolkit";
import ImdbSlice from "./ImdbSlice";

export const store = configureStore({
    reducer : {ImdbSlice}
})