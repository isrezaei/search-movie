import {createSlice , createAsyncThunk , createEntityAdapter} from "@reduxjs/toolkit";
import {AsyncResultSearch} from "./SearchSlice";
import ImdbApi from "../Api/ImdbApi";
import {KeyApi} from "../Api/Key";

export const GetImdbSeriesData = createAsyncThunk('movie/SeriesData' ,  async (params)=> {

    return (await ImdbApi.get(`?s=${params}&apikey=${KeyApi}&type=series`)).data

})

export const GetImdbSeriesDetails = createAsyncThunk('movie/SeriesDetails' ,  async (params)=> {

    return await ImdbApi.get(`?i=${params}&apikey=${KeyApi}&type=series`)
        .then(Response => Response.data)
        .catch(Response => console.log(Response))
})


const SeriesAdapter = createEntityAdapter({
    selectId : entities => entities.imdbID,
})

const initialState = SeriesAdapter.getInitialState({
    status : 'idle',
    details : {}
})

export const {selectIds : selectSeriesIds , selectById : selectSeriesByIds} = SeriesAdapter.getSelectors(state => state.SeriesSlice)

export const SeriesSlice = createSlice({
    name : 'series',
    initialState ,
    reducers : {
        CleanSeriesDetails : (state) =>
        {
            state.details = {}
        }
    },
    extraReducers : {

        [GetImdbSeriesData.pending] : (state) =>
        {
            state.status = 'pending'
        },
        [GetImdbSeriesData.fulfilled] : (state , {payload}) =>
        {
            if (payload.Search)
            {
                state.status = 'success'
                SeriesAdapter.upsertMany(state , payload.Search)
            }
            else
            {
                state.status = 'reject'
            }

        },
        [GetImdbSeriesData.rejected] : (state) =>
        {
            state.status = 'reject'
        },

        [GetImdbSeriesDetails.pending] : (state)=>
        {
            state.status = 'pending'
        },
        [GetImdbSeriesDetails.fulfilled] : (state , {payload})=>
        {

            state.status = 'success'
            state.details = payload

        },
        [GetImdbSeriesDetails.rejected] : (state)=>
        {

        },
        [AsyncResultSearch] : (state) =>
        {
            state.status = 'idle'
            SeriesAdapter.removeAll(state)
        }
    }

})

export const {CleanSeriesDetails} = SeriesSlice.actions
export default SeriesSlice.reducer