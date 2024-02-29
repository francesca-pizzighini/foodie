import Header from "../components/header"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

function Recipes() {
  return (
    <div>
        <Navbar/>

        <Header
          url="https://images.unsplash.com/photo-1532768778661-1b347c5f02ce?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          text="Find your next meal"
        />

        <div style={{height: "100px"}}></div>

        <Footer/>
    </div>
  )
}

export default Recipes
