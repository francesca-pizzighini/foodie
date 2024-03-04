import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

import { Provider } from 'react-redux';
import store from "./app/store.jsx";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import About from "./pages/About.jsx";
import Recipes from "./pages/Recipes.jsx";
import Recipe from "./pages/Recipe.jsx";
import ErrorPage from "./pages/errorPage.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/recipes",
    element: <Recipes/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/recipes/:recipeId",
    element: <Recipe/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/about",
    element: <About/>,
    errorElement: <ErrorPage/>
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)