import { useDispatch, useSelector } from "react-redux";
import img from "../../assets/img/img.jpg"
import { useEffect } from "react";
import { fetchRandomRecipes } from "./randomRecipeApiSlice";
import CardRandom from "../../components/cardRandom";

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
                <CardRandom
                    key={recipe.id}
                    id={recipe.id}
                    image={recipe.image}
                    title={recipe.title}
                />
            ))}
        </div>
    )
}

export default RandomRecipeApiView
