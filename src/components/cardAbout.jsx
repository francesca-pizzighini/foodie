

function CardAbout({url, textH3, textP}) {
  return (
    <div className="card card-about">
        <div
            className="c-img c-a-img"
            style={{backgroundImage: `url(${url})`}}
        ></div>
        <div className="c-text c-a-text">
            <h3>{textH3}</h3>
            <p>{textP}</p>
        </div>
      
    </div>
  )
}

export default CardAbout
