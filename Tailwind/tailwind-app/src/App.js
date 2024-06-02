import React from 'react'
import 'boxicons/css/boxicons.min.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Products from './Components/Category/Products';


const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
      </main>
    </>
  )
}

export default App