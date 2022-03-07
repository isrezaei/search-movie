import {createSlice , createAsyncThunk , createEntityAdapter} from "@reduxjs/toolkit";
import ImdbApi from "../Api/ImdbApi";
import {KeyApi} from "../Api/Key";


export const fetchSyncSearch = createAsyncThunk('move&series/GetData' , async (params)=> {

    const Movie = (await ImdbApi.get(`?s=${params}&apikey=${KeyApi}&type=movie`)).data.Search
    const Series = (await ImdbApi.get(`?s=${params}&apikey=${KeyApi}&type=series`)).data.Search

    return Movie.concat(Series)
})


const SyncSearchAdapter = createEntityAdapter({
    sortComparer : (a, b) => b.Year - a.Year,
    selectId : model => model && model.imdbID
})

const initialState = SyncSearchAdapter.getInitialState({
    status : 'idle'
})

export const {selectIds :selectIdsSyncSearch , selectById : selectByIdSyncSearch} = SyncSearchAdapter.getSelectors(state => state.SyncSearch)

const SyncSearch = createSlice({
    name :'SyncSearch' ,
    initialState ,
    reducers : {
        CleanSyncSearch : (state)=> {
            SyncSearchAdapter.removeAll(state)
        }
    },
    extraReducers : {

        [fetchSyncSearch.pending] : (state) =>
        {
            state.status = 'pending'
        },
        [fetchSyncSearch.fulfilled] : (state , {payload}) =>
        {
            state.status = 'success'
            SyncSearchAdapter.upsertMany(state , payload)
        },
        [fetchSyncSearch.rejected] : (state) =>
        {
            state.status = 'reject'
            SyncSearchAdapter.removeAll(state)
        }

    }
})

export default SyncSearch.reducer
export const {CleanSyncSearch} = SyncSearch.actions