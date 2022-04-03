import {createSlice, createAsyncThunk, createEntityAdapter} from "@reduxjs/toolkit";
import ImdbApi from "../Api/ImdbApi";
import {KeyApi} from "../Api/Key";


export const fetchResultSearch = createAsyncThunk('Movie&Series/ResultSearch' , async (params)=>{
    const Movie = (await ImdbApi.get(`?s=${params}&apikey=${KeyApi}&type=movie`)).data.Search
    const Series = (await ImdbApi.get(`?s=${params}&apikey=${KeyApi}&type=series`)).data.Search

    return Movie.concat(Series)
})


const ResultSearchAdapter = createEntityAdapter({
    selectId : model => model.imdbID ,
    sortComparer : (a, b) => b.Year - a.Year
})

 const DefaultIconName = JSON.parse(sessionStorage.getItem('IconName'))


const initialState  = ResultSearchAdapter.getInitialState({
    status : 'idle',
    activeCategory : DefaultIconName || 'Home',
    searchValue : ''
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
        ActiveIcone : (state , {payload})=>
        {
            state.activeCategory = payload
            sessionStorage.setItem('IconName' , JSON.stringify(payload))
        },
        ChangeActiveIcon : (state , {payload}) =>
        {
            state.activeCategory = payload
        },
        SearchValue : (state , {payload}) =>
        {
            state.searchValue = payload
        }
    },
    extraReducers : {

        [fetchResultSearch.pending] : (state)=>
        {
            state.status = 'pending'
            ResultSearchAdapter.removeAll(state)
        },
        [fetchResultSearch.fulfilled] : (state , {payload})=>
        {
            state.status = 'success'
            ResultSearchAdapter.upsertMany(state , payload)
        },
        [fetchResultSearch.rejected] : (state)=>
        {
            state.status = 'reject'
            ResultSearchAdapter.removeAll(state)

        },
    }
})

export default ResultSearchSlice.reducer
export const {ActiveIcone , ChangeActiveIcon , SearchValue} = ResultSearchSlice.actions
