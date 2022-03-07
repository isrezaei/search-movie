import {configureStore} from "@reduxjs/toolkit";
import MovieSlice from "./MovieSlice";
import SeriesSlice from "./SeriesSlice";
import SyncSearch from "./SyncSearchSlice";
import DetailsSlice from "./DetailsSlice";

export const store = configureStore({
    reducer : {
        MovieSlice,
        SeriesSlice,
        SyncSearch,
        DetailsSlice
    }
})