import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

const apiKey = import.meta.env.VITE_API_KEY
const apiKey2 = import.meta.env.VITE_API_KEY2
const apiKey3 = import.meta.env.VITE_API_KEY3
const apiKey4 = import.meta.env.VITE_API_KEY4
const apiKey5 = import.meta.env.VITE_API_KEY5

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