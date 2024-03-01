function CardRecipe({ image, title, vegan, glutenFree }) {
  return (
    <div className="card">
      
      
      <div 
        className="c-img"
        style={{backgroundImage: `url(${image})`}}
      >  
      </div>


      <div className="c-text">
          <h3
            id="card-title"
            style={{textDecoration: "none"}}
          >{title}</h3>
          <p>{vegan ? "Vegan dish" : ""}</p>
          <p>{glutenFree ? "Gluten free dish" : ""}</p>
      </div>

    </div>
  )
}

export default CardRecipe
