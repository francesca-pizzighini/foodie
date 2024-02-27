import './App.scss'

import Navbar from "./components/navbar.jsx"
import Header from "./components/header.jsx"

function App() {

  return (
    <>
      <Navbar/>

      <Header
        img="home-img"
        text="discover a new world of healty recipes"
        color="light-color"
      />

      <div style={{height: "500px"}}></div>
    </>
  )
}

export default App
