import { useEffect, useState } from "react"
import Navbar from "../components/navbar"
import Header from "../components/header"
import Footer from "../components/footer"
import axios from "axios"
import { useParams } from "react-router-dom"

import apiKey from "../apiKey.jsx"
import { apiKey2, apiKey3 } from "../apiKey.jsx"

function Recipe({}) {
  const recipeId = useParams().recipeId

  const url = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey3}&includeNutrition=true`;
  // const defurl = `https://api.spoonacular.com/recipes/633091/information?apiKey=${apiKey3}&includeNutrition=true`;

  const [recipeData, setRecipeData] = useState({})
  const [ingredients, setIngredients] = useState([])
  const [nutrients, setNutrients] = useState([])

  useEffect(() => {
    (async () => {
      try{
        const response = await axios.get(url);
        const data = await response.data;
        setRecipeData(data)
        setIngredients(data.extendedIngredients)
        setNutrients(data.nutrition.nutrients[0])
      } catch (err) {
        console.log (err)
      }
    })()
  }, [])

  console.log(recipeData)
  console.log(ingredients)
  console.log(nutrients)


  return (
    <div>
        <Navbar/>
        <Header
          url={recipeData.image}
        />
        {/* <div
          style={{
            backgroundImage: `url(${recipeData.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            width: "600px",
            height: "600px"}}
        ></div> */}
        <div className="safe">
          <h2>{recipeData.title}</h2>
          <h4>{recipeData.vegan ? "Vegan" : "Not Vegan"}</h4>
          <h4>{recipeData.glutenFree ? "Gluten free" : "Not Gluten free"}</h4>
          
          <h3>General information</h3>
          <h4>Ready in: 
            <span> {recipeData.readyInMinutes} minutes</span>
          </h4>
          <h4>Servings:
            <span> {recipeData.servings}</span>
          </h4>
          <h4>Calories:
            <span> {Math.ceil(nutrients.amount)} {nutrients.unit}</span>
          </h4>

          <h3>Ingredients</h3>
          <ul>
            {ingredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>

          <h3>Instructions</h3>
          <div
            dangerouslySetInnerHTML={{__html: recipeData.instructions}}  
          ></div>

        </div>

        <Footer/>

    </div>
  )
}

export default Recipe
