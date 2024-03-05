import { useState, useId, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import axios from "axios";

import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CardRecipe from "../components/cardRecipe";
import ErrorMessage from "../components/errorMessage";

function Recipes() { 
  const id = useId();

  const apiKey = import.meta.env.VITE_API_KEY;
  const apiKey2 = import.meta.env.VITE_API_KEY2;
  const apiKey3 = import.meta.env.VITE_API_KEY3;
  const apiKey4 = import.meta.env.VITE_API_KEY4;
  const apiKey5 = import.meta.env.VITE_API_KEY5;

  const [formData, setFormData] = useState({
    query: "",
    isVegan: false,
    isGlutenFree: false,
    cuisine: ""
  })
  const [searchStart, setSearchStart] = useState({
    query: "",
    isVegan: false,
    isGlutenFree: false,
    cuisine: ""
  })
  const [diet, setDiet] = useState("")
  const [recipes, setRecipes] = useState([])
  const [error, setError] = useState(false)

  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey4}&diet=vegetarian${diet}&cuisine=${searchStart.cuisine}&number=12&query=${searchStart.query}`;

  function handleChange(e){
    const { name, value, type, checked } = e.target;
    setDiet(prevDiet => {
      let newDiet = prevDiet;

      if (name === "isVegan" && checked) {
        newDiet += ",vegan";
      } else if (name === "isVegan" && !checked) {
        newDiet = newDiet.replace(",vegan", "");
      }

      if (name === "isGlutenFree" && checked) {
        newDiet += ",glutenFree" ;
      } else if (name === "isGlutenFree" && !checked) {
        newDiet = newDiet.replace(",glutenFree", "");
      }

      return newDiet;
    })

    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  function handleSearchStart(e){
    e.preventDefault();
    const correctedQuery = formData.query.toLowerCase().trim().replaceAll(" ", "+");
    setSearchStart(prev => ({
      ...prev,
      query: correctedQuery,
      isVegan: formData.isVegan,
      isGlutenFree: formData.isGlutenFree,
      cuisine: formData.cuisine
    }));
  }

  useEffect(() => {
    (async () => {
      try{
        setError(false);

        const response = await axios.get(url);
        const data = await response.data.results;
        setRecipes(data);

        setFormData(prevData => {
          return {
            ...prevData,
            query: ""
          }
        })

      } catch (err) {
        console.log(err);
        setError(true);
      }
    })()
  }, [searchStart])

  console.log(url)

  return (
    <div>
        <Navbar/>

        <Header
          url="https://images.unsplash.com/photo-1532768778661-1b347c5f02ce?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          text="Find your next meal"
        />
        
        <div
          className="safe search-bar"
        >

          <div
            className="bar"
          >
            <input 
              type="text"
              name="query"
              id={id + "-query"}
              value={formData.query}
              onChange={handleChange}
              className="poppins-extralight"
            >
            </input> 

            <button 
              onClick={handleSearchStart}
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
              name="cuisine"
              id={id + "-cuisine"}
              value={formData.cuisine}
              onChange={handleChange}
              className="poppins-extralight"
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
                  type="checkbox"
                  name="isVegan"
                  id={id + "-isVegan"}
                  defaultChecked={formData.isVegan}
                  onChange={handleChange}
                ></input>
              </div>
              
              <div>
                <label
                  htmlFor={id + "-isGlutenFree"}
                  className="poppins-extralight"
                >Gluten free</label>

                <input
                  type="checkbox"
                  name="isGlutenFree"
                  id={id + "-isGlutenFree"}
                  defaultChecked={formData.isGlutenFree}
                  onChange={handleChange}
                ></input>
              </div>
            </div>
          </div>
        </div>

        <div
          className="safe"
        >
          {error ? <ErrorMessage/> : null}

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
        </div>

        <Footer/>
    </div>
  )
}

export default Recipes;