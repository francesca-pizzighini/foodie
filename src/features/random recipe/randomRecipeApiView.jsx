import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchRandomRecipes } from "./randomRecipeApiSlice";
import { HashLink } from "react-router-hash-link";

import CardRecipe from "../../components/cardRecipe";
import ErrorMessage from "../../components/errorMessage";
import loadingImage from "../../assets/img/load-icon.png";

function RandomRecipeApiView() {
    const dispatch = useDispatch();
    const randomRecipe = useSelector(state => state.randomRecipesApi.recipes)
    const loadingState = useSelector(state => state.randomRecipesApi)

    useEffect(() => {
        dispatch(fetchRandomRecipes())
    }, [])

    return (
        <div className="card-container random-recipe">
            {loadingState.loading && (
                <div 
                    className="loading home-loading"
                >
                    <img 
                        src={loadingImage} 
                        alt="loading..."
                        className="loading-image"
                    />
                </div>
            )}
            
            {!loadingState.loading && loadingState.error ? <ErrorMessage/> : null}
            
            {!loadingState.loading && randomRecipe.map(recipe => (
                <HashLink
                    to={`/recipes/${recipe.id}#navbar`}
                    key={recipe.id}
                >
                    <CardRecipe
                        key={recipe.id}
                        id={recipe.id}
                        image={recipe.image}
                        title={recipe.title}
                        vegan={recipe.vegan}
                        glutenFree={recipe.glutenFree}
                    />
                </HashLink>
            ))}
        </div>
    )
}

export default RandomRecipeApiView;