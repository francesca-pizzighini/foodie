import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {v4 as uuidv4} from 'uuid';
import loadingImage from "../assets/img/load-icon.png"

import Navbar from "../components/navbar";
import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet, HelmetProvider } from "react-helmet-async";


function Recipe({}) {
  const recipeId = useParams().recipeId;

  const apiKey = import.meta.env.VITE_API_KEY;

  const url = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}&includeNutrition=true`;

  const [recipeData, setRecipeData] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [nutrients, setNutrients] = useState([]);

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    (async () => {
      try{
        setLoading(true)
        const response = await axios.get(url);
        const data = await response.data;
        setRecipeData(data);
        setIngredients(data.extendedIngredients);
        setNutrients(data.nutrition.nutrients[0]);
      } catch (err) {
        console.log (err);
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  return (
    <div
      style={loading ? {cursor: "wait"} : {cursor: "auto"}}
    >
        <HelmetProvider>
          <Helmet>
            <title>{recipeData.title}</title>
            <meta 
              name="description"
              content="Discover information about the dish you've chosen, like how long is teh prepatation, how many servings it contains, and how many calories it contains. You can also see the ingredients and instructions of the dish. Have fun and enjoy your meal"
            ></meta>
            <meta 
              name="keywords" 
              content="recipes, vegetarian, vegan, health, gluten-free, healthy-cousine, heltier-life, care-for-the-planet, igredients, instructions, calories, ready-in"
            ></meta>
          </Helmet>
        </HelmetProvider>

        <Navbar/>
        
        <div 
          className="loading"
        >
          {loading && (
            <img 
              src={loadingImage} 
              alt="loading..."
              className="loading-image"
              style={{marginTop: "30px"}}
            />
          )} 
        </div>
        {!loading && (
          <Header
            url={recipeData.image}
          />)}

        <div className="safe">
          {!loading && (<>
            <h2>{recipeData.title}</h2>
            <h4>{recipeData.vegan ? "Vegan" : "Not Vegan"}</h4>
            <h4>{recipeData.glutenFree ? "Gluten free" : "Not Gluten free"}</h4>
          </>)}
          
          {!loading && (<>
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
          </>)}
          
          {!loading && ( <>
            <h3>Ingredients</h3>
            <ul>
              {ingredients.map((ingredient) => (
                <li key={uuidv4() + ingredient.id}>{ingredient.original}</li>
              ))}
            </ul>
          </>)}

          
          {!loading && ( <>
            <h3>Instructions</h3>
            <div
              dangerouslySetInnerHTML={{__html: recipeData.instructions}} 
              className="instructions" 
            ></div>
          </>)}

        </div>

        <Footer/>
    </div>
  )
}

export default Recipe;