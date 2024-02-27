
function Header({img, text, color}) {
  return (
    <div 
        className={`header ${img}`}
    >
        <h2
            className="satisfy-regular"
        >{text}</h2>
    </div>
  )
}

export default Header
