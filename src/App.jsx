import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import StarterKit from './components/StarterKit'
import Benefits from './components/Benefits'
import ProductCollection from './components/ProductCollection'
import Essentials from './components/Essentials'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <StarterKit />
      <Benefits />
      <ProductCollection />
      <Essentials />
      <Footer />
    </>
  )
}

export default App
