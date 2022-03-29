import {createSlice , createEntityAdapter ,} from "@reduxjs/toolkit";



const FavoriteSliceAdapter = createEntityAdapter({
    selectId : model => model.imdbID
})

const initialState = FavoriteSliceAdapter.getInitialState()

export const {selectEntities : selectFavoriteEntities , selectIds} = FavoriteSliceAdapter.getSelectors(state => state.FavoriteSlice)

const FavoriteSlice = createSlice({
    name : 'FavoriteSlice' ,
    initialState ,
    reducers : {
        AddFavorite(state , {payload}){
            FavoriteSliceAdapter.addOne(state , payload)
        },
        RemoveFavorite(state , {payload}){
            FavoriteSliceAdapter.removeOne(state , payload.imdbID)
        }
    }
})

export default FavoriteSlice.reducer
export const {AddFavorite , RemoveFavorite} = FavoriteSlice.actions