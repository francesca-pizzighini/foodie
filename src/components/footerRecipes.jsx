import { Link } from "react-router-dom"

function FooterRecipes() {
  return (
    <div 
        className="foo"
    >
        <p 
            className="foo-text"
        >Find your first recipe</p>

        <Link 
            className="foo-link"
            to="/about"
        >Click here</Link>
    </div>
  )
}

export default FooterRecipes
