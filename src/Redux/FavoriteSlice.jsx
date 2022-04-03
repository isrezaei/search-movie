import {createSlice , createEntityAdapter ,} from "@reduxjs/toolkit";



const FavoriteSliceAdapter = createEntityAdapter({
    selectId : model => model.imdbID ,
    sortComparer : (a, b) => b.sortFavorite - a.sortFavorite
})


export const {selectEntities : selectFavoriteEntities , selectById : selectFavoriteById , selectIds : selectFavoriteId} = FavoriteSliceAdapter.getSelectors(state => state.FavoriteSlice)


const initialState = FavoriteSliceAdapter.getInitialState({
    sortFavorite : 0
})



const FavoriteSlice = createSlice({
    name : 'FavoriteSlice' ,
    initialState ,
    reducers : {
        AddFavorite(state , {payload}){
            FavoriteSliceAdapter.addOne(state , payload)
            state.sortFavorite += 1
        },
        RemoveFavorite(state , {payload}){
            FavoriteSliceAdapter.removeOne(state , payload.imdbID)
            state.sortFavorite -= 1
        }
    }
})

export default FavoriteSlice.reducer
export const {AddFavorite , RemoveFavorite} = FavoriteSlice.actions