
function Header({img, text, color}) {
  return (
    <div 
        className={`header ${img}`}
    >
        <h1
            className="satisfy-regular"
        >{text}</h1>
    </div>
  )
}

export default Header
