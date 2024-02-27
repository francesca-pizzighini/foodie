import Header from "../components/header"
import Navbar from "../components/navbar"

function Recipes() {
  return (
    <div>
        <Navbar/>

        <Header
          img="food-img"
          text="Find your next meal"
        />

        <div style={{height: "500px"}}></div>
    </div>
  )
}

export default Recipes
