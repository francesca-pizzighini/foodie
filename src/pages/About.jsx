import Header from "../components/header"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

function About() {
  return (
    <div>
        <Navbar/>

        <Header
          img="team-img dark-text"
          text="Our team"
        />

        <div style={{height: "100px"}}></div>

        <Footer/>
    </div>
  )
}

export default About
