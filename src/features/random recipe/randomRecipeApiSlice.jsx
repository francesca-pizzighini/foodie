import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiKey from "../../apiKey.jsx";
import { apiKey2, apiKey3 } from "../../apiKey.jsx";


import axios from "axios"


const url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey3}&number=3&include-tags=vegetarian`

const config = {
    header: {
        "Content-Type": "application/json",
        "X-API-Key": apiKey3,
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