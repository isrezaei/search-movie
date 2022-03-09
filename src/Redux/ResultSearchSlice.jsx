import {createSlice, createAsyncThunk, createEntityAdapter , createSelector} from "@reduxjs/toolkit";
import ImdbApi from "../Api/ImdbApi";
import {KeyApi} from "../Api/Key";


export const fetchResultSearch = createAsyncThunk('Movie&Series/ResultSearch' , async (params)=>{

    const {InputValue , TypeOfShow} = params

    const Movie = (await ImdbApi.get(`?s=${InputValue}&apikey=${KeyApi}&type=movie`)).data.Search
    const Series = (await ImdbApi.get(`?s=${InputValue}&apikey=${KeyApi}&type=series`)).data.Search

    return {
        SearchResult : Movie.concat(Series),
        TypeOfShow
    }
})


const ResultSearchAdapter = createEntityAdapter({
    selectId : model => model.imdbID ,
    sortComparer : (a, b) => b.Year - a.Year
})

const initialState  = ResultSearchAdapter.getInitialState({
    status : 'idle',
    activeIconMove : 'Home'
})


export const {
    selectIds : selectResultSearchIds,
    selectById : selectResultSearchByIds,
    selectAll : selectAllResultSearch ,
} = ResultSearchAdapter.getSelectors(state => state.ResultSearchSlice)





export const ResultSearchSlice = createSlice({
    name : 'ShowResultSearch',
    initialState ,
    reducers : {
        ChangeActiveIcon : (state , {payload}) =>
        {
            state.activeIconMove = payload
        }
    },
    extraReducers : {

        [fetchResultSearch.pending] : (state , {payload})=>
        {
            state.status = 'pending'
            ResultSearchAdapter.removeAll(state)
        },
        [fetchResultSearch.fulfilled] : (state , {payload})=>
        {
            state.status = 'success'
            state.activeIconMove = payload.TypeOfShow
            ResultSearchAdapter.upsertMany(state , payload.SearchResult)
        },
        [fetchResultSearch.rejected] : (state)=>
        {
            state.status = 'reject'
            ResultSearchAdapter.removeAll(state)

        },
    }
})

export default ResultSearchSlice.reducer
export const {ChangeActiveIcon} = ResultSearchSlice.actions
