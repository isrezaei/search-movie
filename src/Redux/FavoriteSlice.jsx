// import {createSlice , createEntityAdapter ,} from "@reduxjs/toolkit";
//
//
//
// const FavoriteSliceAdapter = createEntityAdapter({
//     selectId : model => model.imdbID
// })
//
// const initialState = FavoriteSliceAdapter.getInitialState({
//     entities : JSON.parse(localStorage.getItem('save favorite'))
// })
//
// export const {selectEntities : selectFavoriteEntities , selectById : selectFavoriteById} = FavoriteSliceAdapter.getSelectors(state => state.FavoriteSlice)
//
// const FavoriteSlice = createSlice({
//     name : 'FavoriteSlice' ,
//     initialState ,
//     reducers : {
//         AddFavorite(state , {payload}){
//             FavoriteSliceAdapter.addOne(state , payload)
//             localStorage.setItem('save favorite' , JSON.stringify(state.entities))
//         },
//         RemoveFavorite(state , {payload}){
//             FavoriteSliceAdapter.removeOne(state , payload.imdbID)
//             localStorage.setItem('save favorite' , JSON.stringify(state.entities))
//         }
//     }
// })
//
// export default FavoriteSlice.reducer
// export const {AddFavorite , RemoveFavorite} = FavoriteSlice.actions