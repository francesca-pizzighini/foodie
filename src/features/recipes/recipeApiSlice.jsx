import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios"

const apiKey = "23cbe0f3104f4244a078fac7b68043b4"
const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&diet=vegetarian&cuisine=asian`

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