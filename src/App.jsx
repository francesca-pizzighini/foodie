import Navbar from "./components/navbar.jsx";
import Header from "./components/header.jsx";
import Footer from './components/footer.jsx';
import RandomRecipeApiView from './features/random recipe/randomRecipeApiView.jsx';
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Foodie</title>
          <meta 
            name="description"
            content="Discover new vegetarian and vegan recipes everyday! We have houndreds of healthy and delicious recipes from various cuisine, and you can display only the ones you are interested in. We also have a selector to only show gluten-free recipes AND one for vegan recipes, come and discover your next meal!"
          ></meta>
          <meta 
            name="keywords" 
            content="recipes, vegetarian, vegan, health, gluten-free, healthy-cousine, heltier-life, care-for-the-planet"
          ></meta>
        </Helmet>
      </HelmetProvider>

      <Navbar/>

      <Header
        url="https://images.unsplash.com/photo-1532768907235-78653b7dc71d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        text="Discover a new world of healty recipes"
      />

      <div className="safe">
        <h2>Find your next meal</h2>
          <RandomRecipeApiView />
      </div>

      <Footer/>
    </>
  )
}

export default App;
