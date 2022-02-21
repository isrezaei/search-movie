import {createSlice} from "@reduxjs/toolkit";

const SearchSlice = createSlice({
    name : 'search',
    initialState : {
        SyncResultSearch : 'hello',
        AsyncResultSearch : 'hello'
    },
    reducers : {
        SyncResultSearch : (state , {payload}) =>
        {
            state.SyncResultSearch = payload.SearchItems
        },
        AsyncResultSearch : (state , {payload}) =>
        {
            state.AsyncResultSearch = payload
        }
    }
})

export const {SyncResultSearch , AsyncResultSearch} = SearchSlice.actions

export default SearchSlice.reducer