import {createSlice} from "@reduxjs/toolkit";

const SearchSlice = createSlice({
    name : 'search',
    initialState : {},
    reducers : {

        AsyncResultSearch : (state , {payload}) =>
        {
            state.AsyncResultSearch = payload
        }
    }
})

export const {SyncResultSearch , AsyncResultSearch} = SearchSlice.actions

export default SearchSlice.reducer