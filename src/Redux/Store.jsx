import {configureStore} from "@reduxjs/toolkit";
import MovieSlice from "./MovieSlice";
import SeriesSlice from "./SeriesSlice";
import SearchSlice from "./SearchSlice";

export const store = configureStore({
    reducer : {
        MovieSlice ,
        SeriesSlice ,
        SearchSlice
    }
})