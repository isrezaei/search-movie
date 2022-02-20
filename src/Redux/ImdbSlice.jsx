import {createSlice, createAsyncThunk, createEntityAdapter, nanoid} from "@reduxjs/toolkit";

import ImdbApi from "../Api/ImdbApi";
import {KeyApi} from "../Api/Key";

const love = 'friends'

export const GetImdbData = createAsyncThunk('imdb/movie' , async ()=> {

    return await ImdbApi.get(`?s=${love}&apikey=${KeyApi}&type=movie`)
        .then(Response => Response.data)
        .catch(Response => console.log(Response))
})

export const GetImdbDetails = createAsyncThunk('imdb/details' , async (params)=>{

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
    details : {}
})

export const {selectIds : selectMovieIds , selectById : selectMovieByIds , selectAll , selectEntities : selectMovieEntities} = MovieAdapter.getSelectors(state => state.ImdbSlice)

const ImdbSlice = createSlice({
    name : 'imdb',
    initialState ,
    reducers : {
        RemoveDetails : (stata) =>
        {
            stata.details = {}
        }
    } ,
    extraReducers : {
        [GetImdbData.pending] : (state)=>
        {
            state.status = 'pending'
        },
        [GetImdbData.fulfilled] : (state , {payload})=>
        {
            state.status = 'success'
            MovieAdapter.upsertMany(state , payload.Search)
            // console.log(payload)
        },
        [GetImdbData.rejected] : (state)=>
        {
            state.status = 'rejected'
        },

        [GetImdbDetails.pending] : (state)=>
        {

        },
        [GetImdbDetails.fulfilled] : (state , {payload})=>
        {
            // console.log(payload)
            state.details = payload

        },
        [GetImdbDetails.rejected] : (state)=>
        {
            state.status = 'rejected'
        },

    },

})

export const {RemoveDetails} = ImdbSlice.actions

export default ImdbSlice.reducer