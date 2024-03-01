import CardRecipe from "../../components/cardRecipe";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchRandomRecipes } from "./randomRecipeApiSlice";
import { HashLink } from "react-router-hash-link";

function RandomRecipeApiView() {
    const dispatch = useDispatch();
    const randomRecipe = useSelector(state => state.randomRecipesApi.recipes)

    useEffect(() => {
        dispatch(fetchRandomRecipes())
    }, [])

    return (
        <div className="card-container random-recipe">
            {randomRecipe.map(recipe => (
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

export default RandomRecipeApiView