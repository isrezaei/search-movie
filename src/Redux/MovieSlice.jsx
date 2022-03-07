import {createSlice, createAsyncThunk, createEntityAdapter} from "@reduxjs/toolkit";
import ImdbApi from "../Api/ImdbApi";
import {KeyApi} from "../Api/Key";


export const GetImdbMovieData = createAsyncThunk('movie/MovieData' , async (params= 'friends' )=> {
    return (await ImdbApi.get(`?s=${params}&apikey=${KeyApi}&type=movie`)).data
})

const MovieAdapter = createEntityAdapter({
    sortComparer : (a , b) => b.Year - a.Year,
    selectId : model => model.imdbID,
})

const initialState = MovieAdapter.getInitialState({
    status : 'idle',
})

export const {selectIds : selectMovieIds , selectById : selectMovieByIds} = MovieAdapter.getSelectors(state => state.MovieSlice)

const MovieSlice = createSlice({
    name : 'movie',
    initialState ,
    reducers : {} ,
    extraReducers : {
        [GetImdbMovieData.pending] : (state)=>
        {
            state.status = 'pending'
            MovieAdapter.removeAll(state)
        },
        [GetImdbMovieData.fulfilled] : (state , {payload})=>
        {
            if (payload.Search)
            {
                state.status = 'success'
                MovieAdapter.upsertMany(state , payload.Search)
            }
            else
            {
                state.status = 'reject'
            }
        },
        [GetImdbMovieData.rejected] : (state)=>
        {
            state.status = 'rejected'
            MovieAdapter.removeAll(state)
        },
    },

})

export default MovieSlice.reducer