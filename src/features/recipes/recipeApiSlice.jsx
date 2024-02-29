import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

import apiKey from "../../apiKey.jsx";
import { apiKey2, apiKey3 } from "../../apiKey.jsx";

const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey3}&diet=vegetarian&cuisine=asian`

const config = {
    header: {
        "Content-Type": "application/json",
        "X-API-Key": apiKey,
    }
};

export const fetchRecipes = createAsyncThunk("recipes/fetchRecipes", () => {
    return axios.get(url)
        .then(response => response.data)
})



const initialState = {
    loading: false,
    recipes: [],
    error: "",
};

const recipeApiSlice = createSlice({
    name: "recipesApi",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecipes.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchRecipes.fulfilled, (state, action) => {
                state.loading = false;
                state.recipes = action.payload;
                state.error = "";
            })
            .addCase(fetchRecipes.rejected, (state, action) => {
                state.loading = false;
                state.recipes = [];
                state.error = action.error.message;
            });
    }
})

export default recipeApiSlice.reducer;