import {configureStore} from "@reduxjs/toolkit";
import ResultFirstRenderSlice from "./ResultFirstRenderSlice";
import SyncSearch from "./SyncSearchSlice";
import ResultSearchSlice from "./ResultSearchSlice";
import DetailsSlice from "./DetailsSlice";
import FavoriteSlice from "./FavoriteSlice";
import {DarkMoodSlice} from "./DarkMoodSlice";

export const store = configureStore({
    reducer : {
        ResultFirstRenderSlice,
        SyncSearch,
        DetailsSlice,
        ResultSearchSlice,
        DarkMoodSlice,
        FavoriteSlice
    }
})