import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Helmet, HelmetProvider } from "react-helmet-async";

function ErrorPage() {
  return (
    <div className="error">
      <HelmetProvider>
        <Helmet>
          <title>An error occurred</title>
          <meta 
            name="description"
            content="This page show up when an error occurs. Please try to reload the page. If the error persist contact us through the link in the page."
          ></meta>
          <meta 
            name="keywords" 
            content="recipes, vegetarian, vegan, health, gluten-free, healthy-cousine, heltier-life, care-for-the-planet, error"
          ></meta>
        </Helmet>
      </HelmetProvider>

      <Navbar/>
      
      <div className="safe">
        <h2>An error occurred</h2>
        <h4>Please try to reaload the page</h4>
        <p>If the error persist contact us&nbsp;
          <a 
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLScnYfUy9gNezfjjNijBWgBXXLzc1q0F6JuZMmJFQC9Uh4XVlw/viewform?usp=sf_link"
          >here</a>
        </p>

        </div>

        <div style={{height: "100px"}}></div>

        <Footer/>
    </div>
  )
}

export default ErrorPage;
