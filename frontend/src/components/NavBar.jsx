import React from 'react'
export default function NavBar(){
  return (
    <nav className="w-full bg-white shadow sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <img src="/images/logo-abhi.svg" alt="Abhi Chem" className="h-10 w-10"/>
          <span className="font-bold text-xl text-emerald-700">Abhi Chem</span>
          <small className="text-xs text-gray-500 ml-2">(Partnership)</small>
        </a>
        <div className="hidden md:flex gap-6 items-center text-gray-700">
          <a href="#about" className="hover:text-emerald-600">About</a>
          <a href="#plant" className="hover:text-emerald-600">Plant</a>
          <a href="#services" className="hover:text-emerald-600">Services</a>
          <a href="#products" className="hover:text-emerald-600">Products</a>
          <a href="#sustainability" className="hover:text-emerald-600">Sustainability</a>
          <a href="#contact" className="px-4 py-2 rounded bg-emerald-600 text-white">Enquire</a>
        </div>
      </div>
    </nav>
  )
}
