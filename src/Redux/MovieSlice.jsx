import {createSlice, createAsyncThunk, createEntityAdapter, nanoid} from "@reduxjs/toolkit";
import {AsyncResultSearch} from "./SearchSlice";

import ImdbApi from "../Api/ImdbApi";
import {KeyApi} from "../Api/Key";



export const GetImdbMovieData = createAsyncThunk('movie/MovieData' , async (params)=> {

    return await ImdbApi.get(`?s=${params}&apikey=${KeyApi}&type=movie`)
        .then(Response => Response.data)
        .catch(Response => console.log(Response))
})

export const GetImdbMovieDetails = createAsyncThunk('movie/MovieDetails' , async (params)=>{

    return await ImdbApi.get(`?i=${params}&apikey=${KeyApi}&type=movie`)
        .then(Response => Response.data)
        .catch(Response => console.log(Response))

})



const MovieAdapter = createEntityAdapter({
    selectId : entities => entities.imdbID,
    sortComparer : (a , b) => b.Year - a.Year
})

const initialState = MovieAdapter.getInitialState({
    status : 'idle',
    details : {} ,
    search :  ''
})

export const {selectIds : selectMovieIds , selectById : selectMovieByIds , selectAll , selectEntities : selectMovieEntities} = MovieAdapter.getSelectors(state => state.MovieSlice)

const MovieSlice = createSlice({
    name : 'movie',
    initialState ,
    reducers : {
        CleanMovieDetails : (stata) =>
        {
            stata.details = {}
        },
    } ,
    extraReducers : {
        [GetImdbMovieData.pending] : (state)=>
        {
            state.status = 'pending'
        },
        [GetImdbMovieData.fulfilled] : (state , {payload})=>
        {
            state.status = 'success'
            MovieAdapter.upsertMany(state , payload.Search)
            // console.log(payload)
        },
        [GetImdbMovieData.rejected] : (state)=>
        {
            state.status = 'rejected'
        },

        [GetImdbMovieDetails.pending] : (state)=>
        {

        },
        [GetImdbMovieDetails.fulfilled] : (state , {payload})=>
        {
            // console.log(payload)
            state.details = payload

        },
        [GetImdbMovieDetails.rejected] : (state)=>
        {
            state.status = 'rejected'
        },
        [AsyncResultSearch] : (state) =>
        {
            state.status = 'idle'
            MovieAdapter.removeAll(state)
        }
    },

})

export const {CleanMovieDetails} = MovieSlice.actions

export default MovieSlice.reducer