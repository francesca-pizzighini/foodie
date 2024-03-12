import { useState, useId, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import axios from "axios";
import { useForm } from "react-hook-form";

import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CardRecipe from "../components/cardRecipe";
import ErrorMessage from "../components/errorMessage";
import loadingImage from "../assets/img/load-icon.png";
import { Helmet, HelmetProvider } from "react-helmet-async";

function RecipesBackup() { 
    const id = useId();
    const { register, handleSubmit } = useForm();

    const apiKey = import.meta.env.VITE_API_KEY;
    const apiKey2 = import.meta.env.VITE_API_KEY2;
    const apiKey3 = import.meta.env.VITE_API_KEY3;
    const apiKey4 = import.meta.env.VITE_API_KEY4;
    const apiKey5 = import.meta.env.VITE_API_KEY5;

    const [formData, setFormData] = useState({
        query: "",
        isVegan: false,
        isGlutenFree: false,
        cuisine: "",
    })
    const [searchStart, setSearchStart] = useState({
        query: "",
        isVegan: false,
        isGlutenFree: false,
        cuisine: "",
        dietString: ""
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [diet, setDiet] = useState("")
    const [recipes, setRecipes] = useState([])

    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey4}&diet=vegetarian${searchStart.dietString}&cuisine=${searchStart.cuisine}&number=12&query=${searchStart.query}`;

    function onSubmit(data) {
        console.log("click")
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                query: data.query,
                isVegan: data.isVegan,
                isGlutenFree: data.isGlutenFree,
                cuisine: data.cuisine
            }
        })
    };
    function setDietString(){
        let newDiet = "";

        if(formData.isVegan){
            newDiet += ",vegan";
        } else if(!formData.isVegan){
            newDiet = newDiet.replace(",vegan", "");
        }

        if(formData.isGlutenFree){
            newDiet += ",glutenFree" ;
        } else if(!formData.isGlutenFree){
            newDiet = newDiet.replace(",glutenFree", "");
        }

        setDiet(newDiet)
    }
    function handleSearchStart(){
        const correctedQuery = formData.query.toLowerCase().trim().replaceAll(" ", "+");

        setSearchStart(prev => {
            return {
                ...prev,
                query: correctedQuery,
                isVegan: formData.isVegan,
                isGlutenFree: formData.isGlutenFree,
                cuisine: formData.cuisine,
                dietString: diet
            }
        })
    }

    useEffect(() => {
        setDietString();
    }, [formData])
    useEffect(() => {
        handleSearchStart();
    }, [diet, formData])
    useEffect(() => {
        (async () => {
            try{
                setLoading(true)
                setError(false)

                const response =  await axios.get(url)
                const data = await response.data;
                setRecipes(data.results);
            } catch(err) {
                console.error("Error fetching recipes:", err);
                setLoading(false)
                setError(true)
            } finally {
                setLoading(false)
            }
        })()
    }, [searchStart])

  return (
    <div
        style={loading ? {cursor: "wait"} : {cursor: "auto"}}
    >
        <HelmetProvider>
          <Helmet>
            <title>Discover your next meal</title>
            <meta 
              name="description"
              content="Discover new vegetarian and vegan recipes everyday! We have houndreds of healthy and delicious recipes from various cuisine, and you can display only the ones you are interested in. We also have a selector to only show gluten-free recipes AND one for vegan recipes, come and discover your next meal!"
            ></meta>
            <meta 
              name="keywords" 
              content="recipes, vegetarian, vegan-recipes, health, gluten-free, healthy-cousine, heltier-life, care-for-the-planet, multiple-cuisine, search-by-name"
            ></meta>
          </Helmet>
        </HelmetProvider>

        <Navbar/>

        <Header
          url="https://images.unsplash.com/photo-1532768778661-1b347c5f02ce?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          text="Find your next meal"
        />

        <form
            className="safe search-bar"
            onSubmit={handleSubmit(onSubmit)}
        >  
            <div
                className="bar"
            >
                <input 
                    {...register("query")}
                    type="text"
                    className="poppins-extralight"
                ></input> 

                <button 
                    type="submit"
                    disabled={loading ? "disabled" : ""}
                >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    fill="currentColor"  
                    viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
                </button>
            </div>

            <div 
                className="search-organization"
            >
                <select
                    {...register("cuisine")}
                    id={id + "-cuisine"}
                    className="poppins-extralight"
                    disabled={loading}
                >
                    <option value="">No selection</option>
                    <option value="african">African</option>
                    <option value="asian">Asian</option>
                    <option value="american">American</option>
                    <option value="british">British</option>
                    <option value="cajun">Cajun</option>
                    <option value="caribbean">Caribbean</option>
                    <option value="chinese">Chinese</option>
                    <option value="european">European</option>
                    <option value="french">French</option>
                    <option value="german">German</option>
                    <option value="greek">Greek</option>
                    <option value="indian">Indian</option>
                    <option value="irish">Irish</option>
                    <option value="italian">Italian</option>
                    <option value="japanese">Japanese</option>
                    <option value="jewish">Jewish</option>
                    <option value="korean">Korean</option>
                    <option value="mediterranean">Mediterranean</option>
                    <option value="mexican">Mexican</option>
                    <option value="nordic">Nordic</option>
                    <option value="southern">Southern</option>
                    <option value="spanish">Spanish</option>
                    <option value="thai">Thai</option>
                    <option value="vietnamese">Vietnamese</option>
                </select>

                <div
                className="check"
                >
                    <div>
                        <label
                            htmlFor={id + "-isVegan"}
                            className="poppins-extralight"
                        >Vegan</label>

                        <input
                            {...register("isVegan")}
                            type="checkbox"
                            id={id + "-isVegan"}
                              disabled={loading}
                        ></input>
                    </div>
                
                    <div>
                        <label
                            htmlFor={id + "-isGlutenFree"}
                            className="poppins-extralight"
                        >Gluten free</label>

                        <input
                            {...register("isGlutenFree")}
                            type="checkbox"
                            id={id + "-isGlutenFree"}
                              disabled={loading}
                        ></input>
                    </div>
                </div>
            </div>
        </form>

        <div
            className="safe"
        >
            {error ? <ErrorMessage/> : null}

            <div
                className="loading"
            >
                {loading && (
                    <img 
                        src={loadingImage} 
                        alt="loading..."
                        className="loading-image"
                    />
                )} 
            </div>

            {!loading && (
                <div
                    className="card-container random-recipe"
                >
                {recipes.map(recipe => (
                    <HashLink
                    to={`/recipes/${recipe.id}#navbar`}
                    key={recipe.id}
                    >
                    <CardRecipe
                        key={recipe.id}
                        id={recipe.id}
                        image={recipe.image}
                        title={recipe.title}
                    />
                    </HashLink>
                ))}
                </div>
            )}
        </div>

        <Footer/>
    </div>
  )
}

export default RecipesBackup;