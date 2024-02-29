import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios"

const apiKey = "23cbe0f3104f4244a078fac7b68043b4"
const url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=3&include-tags=vegetarian`

const config = {
    header: {
        "Content-Type": "application/json",
        "X-API-Key": apiKey,
    }
};

export const fetchRandomRecipes = createAsyncThunk("recipes/fetchRandomRecipes", () => {
    return axios.get(url)
        .then(response => response.data.recipes)
})



const initialState = {
    loading: false,
    recipes: [],
    error: "",
};

const randomRecipeApiSlice = createSlice({
    name: "randomRecipesApi",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRandomRecipes.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchRandomRecipes.fulfilled, (state, action) => {
                state.loading = false;
                state.recipes = action.payload;
                state.error = "";
            })
            .addCase(fetchRandomRecipes.rejected, (state, action) => {
                state.loading = false;
                state.recipes = [];
                state.error = action.error.message;
            });
    }
})

export default randomRecipeApiSlice.reducer;