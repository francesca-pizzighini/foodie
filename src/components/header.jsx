
function Header({img, text}) {
  return (
    <div 
        className={`header ${img}`}
    >
        <h1
            className={`satisfy-regular`}
        >{text}</h1>
    </div>
  )
}

export default Header
