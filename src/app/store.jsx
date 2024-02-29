import { configureStore } from "@reduxjs/toolkit";

import recipeApiReducer from "../features/recipes/recipeApiSlice.jsx"
import randomRecipeApiReducer from "../features/random recipe/randomRecipeApiSlice.jsx"

const store = configureStore({
    reducer: {
        recipesApi: recipeApiReducer,
        randomRecipesApi:  randomRecipeApiReducer,
    }
})

export default store