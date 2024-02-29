
function CardRandom({ image, title }) {
  return (
    <div className="card">
      
      <img 
        src={image}
        className="c-img"
      />


      <div className="c-text">
          <h3
            id="card-title"
            style={{textDecoration: "none"}}
          >{title}</h3>
      </div>

    </div>
  )
}

export default CardRandom
