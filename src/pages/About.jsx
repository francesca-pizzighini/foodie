import Header from "../components/header"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import CardAbout from "../components/cardAbout"

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

          <div className="card-about-container">
            {/* cards */}
            <CardAbout
              img="c-a-food"
              textH3="Healthy food"
              textP="You don't have to eat bland food to live a healthy life, find the perfect recipe for you!"
            />
            <CardAbout
              img="c-a-health"
              textH3="Healthier life"
              textP="It is scientifically proven that eating less meat helps lowering blood pressure, control diabetes and prevent cancer."
            />
            <CardAbout
              img="c-a-enviroment"
              textH3="Climate friends"
              textP="We care about the enviroment everyday, and we wanted to help in our way encouraging people to buy less meat."
            />

          </div>

          <h2>Our story</h2>
          <p>
            Our story is still short, but we know our project can help changing our world in the best way.
          </p>
          <p>
            Founded in 2023 our site was created to help people discover delicious vegetarian recipes to implement in their nutrition. It is scientifically proven that lowering the consumptionof red meat is better for our body, and this is why  we chose tp create a website that promote tasty vegetarian recipes. 
          </p>
          <p>
            As already said all out team put a lot of attenction to climate changing problem, and some members started a vegan diet exacty for this reason, and this made us realize we needed to add the possibility to search only vegan recipes for this people.
          </p>
          <p>
            Eventually we added 2 more features to the search of our recipes. The first one was simply necessary to give everyone the chance to use our service: a gluten-free option.
            <br/>
            The last feature was suggested from a member of our team and we all agreed tha would improve the user experience. We let the costumer choose in which cuisine he/she wants to search dish. This wasn't needed, but it's fun to try dish from different countries.
            <br/>
            Always focus on having fun and taste new great food together!
          </p>
          <p>
            Thanks for reading this far and remember: every little step is a step formard, lets commit together to change our world for the best.
          </p>
        </div>

        <Footer/>
    </div>
  )
}

export default About
