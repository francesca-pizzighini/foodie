import Header from "../components/header"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

function About() {
  return (
    <div className="about-page">
        <Navbar/>

        <Header
          img="team-img dark-text"
          text="Our team"
        />

        <div className="safe">
          <h2>Our mission</h2>

          <h2>Our story</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae cupiditate velit, mollitia, cumque veniam ut dolorum molestiae iusto in animi adipisci. Nobis illo enim iste delectus numquam amet, reprehenderit, incidunt dolor error consequatur cupiditate, quam ut omnis laudantium dolorum autem quo. Doloremque numquam earum neque quasi quod aspernatur. Doloribus, atque.</p>
        </div>





        <div style={{height: "100px"}}></div>

        <Footer/>
    </div>
  )
}

export default About
