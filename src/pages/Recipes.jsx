import Header from "../components/header"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

function Recipes() {
  return (
    <div>
        <Navbar/>

        <Header
          img="food-img"
          text="Find your next meal"
        />

        <div style={{height: "100px"}}></div>

        <Footer/>
    </div>
  )
}

export default Recipes
