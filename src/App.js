import React from 'react'
import Navbar from './components/Navbar'
import Content from './components/Content'
import Sconstanza from './components/Sconstanza'
import Newsletter from './components/Newsletter'
import Cards from "./components/Cards"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div>
      <Navbar />
      <Content />
      <Sconstanza />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  )
}

export default App
