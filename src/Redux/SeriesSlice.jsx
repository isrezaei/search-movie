import {createSlice , createAsyncThunk , createEntityAdapter} from "@reduxjs/toolkit";
import ImdbApi from "../Api/ImdbApi";
import {KeyApi} from "../Api/Key";

export const GetImdbSeriesData = createAsyncThunk('movie/SeriesData' ,  async (params = 'friends')=> {
    return (await ImdbApi.get(`?s=${params}&apikey=${KeyApi}&type=series`)).data
})


const SeriesAdapter = createEntityAdapter({
    selectId : entities => entities.imdbID,
})

const initialState = SeriesAdapter.getInitialState({
    status : 'idle',
})

export const {selectIds : selectSeriesIds , selectById : selectSeriesByIds} = SeriesAdapter.getSelectors(state => state.SeriesSlice)

export const SeriesSlice = createSlice({
    name : 'series',
    initialState ,
    reducers : {},
    extraReducers : {

        [GetImdbSeriesData.pending] : (state) =>
        {
            state.status = 'pending'
            SeriesAdapter.removeAll(state)
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
            SeriesAdapter.removeAll(state)
        },
    }

})

export default SeriesSlice.reducer