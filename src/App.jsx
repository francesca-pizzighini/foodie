import './App.scss'

import Navbar from "./components/navbar.jsx"
import Header from "./components/header.jsx"
import Footer from './components/footer.jsx'

import RandomRecipeApiView from './features/random recipe/randomRecipeApiView.jsx'

function App() {

  return (
    <>
      <Navbar/>

      <Header
        img="home-img"
        text="Discover a new world of healty recipes"
      />

      <div className="safe">
        <h2>Find your next meal</h2>
          <RandomRecipeApiView />
      </div>

      <div style={{height: "100px"}}></div>

      <Footer/>
    </>
  )
}

export default App
