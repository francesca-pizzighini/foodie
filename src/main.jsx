import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react'

import About from './pages/About.jsx'
import Recipes from './pages/Recipes.jsx'
import Recipe from './pages/Recipe.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/recipes',
    element: <Recipes/>
  },
  {
    path: '/recipes/:recipeId',
    element: <Recipe/>
  },
  {
    path: '/about',
    element: <About/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <RouterProvider router={router}/>
    {/* </Provider> */}
  </React.StrictMode>,
)
