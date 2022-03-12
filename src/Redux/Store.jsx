import {configureStore} from "@reduxjs/toolkit";
import MovieSlice from "./ResultFirstRenderSlice";
import SeriesSlice from "./SeriesSlice";
import SyncSearch from "./SyncSearchSlice";
import ResultSearchSlice from "./ResultSearchSlice";
import DetailsSlice from "./DetailsSlice";

export const store = configureStore({
    reducer : {
        MovieSlice,
        SeriesSlice,
        SyncSearch,
        DetailsSlice,
        ResultSearchSlice
    }
})