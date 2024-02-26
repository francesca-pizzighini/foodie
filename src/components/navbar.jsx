import { NavLink } from "react-router-dom"

import foodie from "../assets/img/foodie.png"

function Navbar() {
  const x=15

  const recipes = document.getElementById("recipes")
  const about = document.getElementById("about")
  const home = document.getElementById("logo")
  const menuDisplay = ({ isActive }) => {
    if (window.innerWidth > 600) {
      return {
        display: "block"
      }
    }else if (window.innerWidth < 600) {
      return {
        display: isActive ? "none" : "block"
      }
    }
  }
  const logoDisplay = {
    height: window.innerWidth > 600 ? "70px" : "50px",
  }
    
  

  return (
    <nav className="navbar">
        <NavLink 
        style={logoDisplay}
          className="satisfy-regular" 
          id="logo" 
          to={"/"}
          >
            <img 
              style={logoDisplay}
              src={foodie} 
              alt="logo del brand"
            />
        </NavLink>

        <NavLink 
          style={menuDisplay}
          className="satisfy-regular" 
          id="recipes" 
          to={"/recipes"}
          >
            Recipes
        </NavLink>

        <NavLink 
          style={menuDisplay}
          className="satisfy-regular" 
          id="about" 
          to={"/about"}
          >
            About{window.innerWidth > 600 ? " the project" : null}
          </NavLink>
    </nav>
  )
}

export default Navbar
