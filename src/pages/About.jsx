import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CardAbout from "../components/cardAbout";
import { Helmet, HelmetProvider } from "react-helmet-async";

function About() {
  return (
    <div className="about-page">

      <HelmetProvider>
        <Helmet>
          <title>About the project</title>
          <meta 
            name="description"
            content="Discover how we decided to build this website and why. We care for this planet and his inhabitants, we care for you, and we want to share this journey to eat better with you.
            Fin you next meal with us, and don't worry, we have your back! If you search for specific cuisine, or if you only want gluten free or vegan recipe just folloe the link to recipes page and set the search parameters. Now relax and discover your next meal!"
          ></meta>
          <meta 
            name="keywords" 
            content="recipes, vegetarian, vegan, health, gluten-free, healthy-cousine, helthier-life, care-for-the-planet, team-work"
          ></meta>
        </Helmet>
      </HelmetProvider>

      <Navbar/>

      <Header
        url="https://images.unsplash.com/photo-1573496774426-fe3db3dd1731?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        text="Our team"
      />

      <div className="safe">
        <h2>Our mission</h2>

        <div className="card-container card-about-container">
          {/* cards */}
          <CardAbout
            url="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            textH3="Healthy food"
            textP="You don't have to eat bland food to live a healthy life, find the perfect recipe for you!"
          />
          <CardAbout
            url="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            textH3="Healthier life"
            textP="It is scientifically proven that eating less meat helps lowering blood pressure, control diabetes and prevent cancer."
          />
          <CardAbout
            url="https://images.unsplash.com/photo-1552799446-159ba9523315?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            textH3="Climate friends"
            textP="We care about the enviroment everyday, and we wanted to help in our way encouraging people to buy less meat."
          />
        </div>
        
        <div className="about-bio">
          <h2>Our story</h2>
          <p>
            Our story is still short, but we know our project can help changing our world in the best way.
          </p>
          <p>
            Founded in 2023 our site was created to help people discover delicious vegetarian recipes to implement in their nutrition. It is scientifically proven that lowering the consumption of red meat is better for our body, and this is why  we chose tp create a website that promote tasty vegetarian recipes. 
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
      </div>

      <Footer/>
    </div>
  )
}

export default About;
