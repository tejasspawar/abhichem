import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import PlantDetails from './components/PlantDetails'
import Services from './components/Services'
import Products from './components/Products'
import Sustainability from './components/Sustainability'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen font-sans bg-white text-slate-800">
      <NavBar />
      <main>
        <Hero />
        <About />
        <PlantDetails />
        <Services />
        <Products />
        <Sustainability />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
