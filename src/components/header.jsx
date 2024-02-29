
function Header({url, text}) {
  return (
    <div 
        className="header"
        style={{backgroundImage: `url(${url})`}}
    >
        <h1
            className={`satisfy-regular`}
        >{text}</h1>
    </div>
  )
}

export default Header
