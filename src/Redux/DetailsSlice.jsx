import {createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import ImdbApi from "../Api/ImdbApi";
import {KeyApi} from "../Api/Key";


export const fetchDetails = createAsyncThunk('Details/fetch-Details' , async (params)=>{

    return (await ImdbApi.get(`?i=${params}&apikey=${KeyApi}&type=movie`)).data

})



export const DetailsSlice = createSlice({
    name : 'Details',
    initialState : {
        details : {},
        status : 'idle'
    },
    reducers : {
        CleanDetails : (state) =>
        {
            state.details = {}
        }
    },
    extraReducers : {

        [fetchDetails.pending] : (state) =>
        {
            state.state = 'pending'
        },
        [fetchDetails.fulfilled] : (state , {payload}) =>
        {
            state.status = 'success'
            state.details = payload
        },
        [fetchDetails.rejected] : (state) =>
        {
            state.status = 'reject'
        },

    }
})

export default DetailsSlice.reducer
export const {CleanDetails} = DetailsSlice.actions