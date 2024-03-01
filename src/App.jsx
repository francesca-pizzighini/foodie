import Navbar from "./components/navbar.jsx"
import Header from "./components/header.jsx"
import Footer from './components/footer.jsx'

import RandomRecipeApiView from './features/random recipe/randomRecipeApiView.jsx'

function App() {

  return (
    <>
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

export default App
