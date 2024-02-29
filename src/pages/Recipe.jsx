import { useEffect, useState } from "react"
import Navbar from "../components/navbar"
import axios from "axios"
import { useParams } from "react-router-dom"

function Recipe({}) {
  const recipeId = useParams().recipeId
  

  const apiKey = "23cbe0f3104f4244a078fac7b68043b4";
  const apiKey2 = "103455f1ad5d46229f01cfa6b9f7bfa1";
  const url = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey2}&includeNutrition=true`;

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
  // console.log(recipeData.nutrition.nutrients)


  return (
    <div>
        <Navbar/>
        <img
          src={recipeData.image}
        />
        <div>
          <h2>{recipeData.title}</h2>
          <h4>{recipeData.vegan ? "Vegan" : "Not Vegan"}</h4>
          <h4>{recipeData.glutenFree ? "Gluten free" : "Not Gluten free"}</h4>
          
          <h3>General information</h3>
          <h4>Ready in: {recipeData.readyInMinutes} minutes</h4>
          <h4>Servings: {recipeData.servings}</h4>
          <h4>Calories: {nutrients.amount} {nutrients.unit}</h4>

          <h3>Ingredients</h3>
          <ul>
            {ingredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ) )}
          </ul>

          <h3>Instructions</h3>
          <p>{recipeData.instructions}</p>

        </div>
    </div>
  )
}

export default Recipe
