import Header from "../components/header"
import Navbar from "../components/navbar"

function About() {
  return (
    <div>
        <Navbar/>

        <Header
          img="team-img dark-text"
          text="Our team"
        />

        <div style={{height: "500px"}}></div>
    </div>
  )
}

export default About
