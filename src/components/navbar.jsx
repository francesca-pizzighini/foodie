import { NavLink } from "react-router-dom"

function Navbar() {

  return (
    <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/recipes"}>Recipes</NavLink>
        <NavLink to={"/about"}>About the project</NavLink>
    </nav>
  )
}

export default Navbar
