
function Header({img, text, color}) {
  return (
    <div 
        className={`header ${img}`}
    >
        <h2
            className={`satisfy-regular ${color}`}
        >{text}</h2>
    </div>
  )
}

export default Header
