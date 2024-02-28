

function CardAbout({img, textH3, textP}) {
  return (
    <div className="card-about">
        <div
            className={`c-a-img ${img}`}
        ></div>
        <div className="c-a-text">
            <h3>{textH3}</h3>
            <p>{textP}</p>
        </div>
      
    </div>
  )
}

export default CardAbout
