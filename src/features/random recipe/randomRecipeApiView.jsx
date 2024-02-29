import { useDispatch, useSelector } from "react-redux";
import img from "../../assets/img/img.jpg"
import { useEffect } from "react";
import { fetchRandomRecipes } from "./randomRecipeApiSlice";
import CardRandom from "../../components/cardRandom";
import { Link } from "react-router-dom";

function RandomRecipeApiView() {
    const dispatch = useDispatch();
    const randomRecipe = useSelector(state => state.randomRecipesApi.recipes)

    useEffect(() => {
        dispatch(fetchRandomRecipes())
    }, [])

    console.log(randomRecipe)

    return (
        <div className="card-container random-recipe">
            {randomRecipe.map(recipe => (
                <Link
                    to={`/recipes/${recipe.id}`}
                    key={recipe.id}
                >
                    <CardRandom
                        key={recipe.id}
                        id={recipe.id}
                        image={recipe.image}
                        title={recipe.title}
                        vegan={recipe.vegan}
                        glutenFree={recipe.glutenFree}
                    />
                </Link>
            ))}
        </div>
    )
}

export default RandomRecipeApiView
