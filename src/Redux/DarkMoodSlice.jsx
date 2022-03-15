import {createReducer , createAction} from "@reduxjs/toolkit";

const initialState = {
    darkMood : true
}

export const DarkMoodSlice = createReducer(initialState , (builder => {
     builder
         .addCase('ChangeDarkMood' , (state) => {
           state.darkMood = !state.darkMood
         })
}))

export const ChangeDarkMood = createAction('ChangeDarkMood')