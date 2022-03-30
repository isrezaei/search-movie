import {createReducer , createAction} from "@reduxjs/toolkit";

const SaveChoiceTheme =  JSON.parse(localStorage.getItem('dark mood'))

const initialState = {
    darkMood : SaveChoiceTheme === null ? true : SaveChoiceTheme
}

export const DarkMoodSlice = createReducer(initialState , (builder => {
     builder
         .addCase('ChangeDarkMood' , (state) => {
           state.darkMood = !state.darkMood
           localStorage.setItem('dark mood' , JSON.stringify(state.darkMood))
         })
}))

export const ChangeDarkMood = createAction('ChangeDarkMood')