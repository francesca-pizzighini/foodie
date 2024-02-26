import { configureStore } from "@reduxjs/toolkit";

import recipeApiReducer from "../features/recipes/recipeApiSlice.jsx"

const store = configureStore({
    reducer: {
        recipesApi: recipeApiReducer
    }
})

export default store