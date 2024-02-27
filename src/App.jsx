import './App.scss'

import Navbar from "./components/navbar.jsx"
import Header from "./components/header.jsx"
import Footer from './components/footer.jsx'

function App() {

  return (
    <>
      <Navbar/>

      <Header
        img="home-img"
        text="Discover a new world of healty recipes"
      />

      <div style={{height: "100px"}}></div>

      <Footer/>
    </>
  )
}

export default App
