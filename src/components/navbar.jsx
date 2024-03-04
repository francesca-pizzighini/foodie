import { NavLink } from "react-router-dom";

import foodie from "../assets/img/foodie.png";

function Navbar() {
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
    
  return (
    <nav 
      className="navbar"
      id="navbar"
    >
        <NavLink 
          className="satisfy-regular" 
          id="logo" 
          to={"/"}
          >
            <img 
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

export default Navbar;