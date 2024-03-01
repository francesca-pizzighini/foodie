import { configureStore } from "@reduxjs/toolkit";

import randomRecipeApiReducer from "../features/random recipe/randomRecipeApiSlice.jsx"

const store = configureStore({
    reducer: {
        randomRecipesApi:  randomRecipeApiReducer,
    }
})

export default store