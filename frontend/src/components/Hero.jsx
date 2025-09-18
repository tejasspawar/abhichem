import React from 'react'
export default function Hero(){
  return (
    <header id="home" className="bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-800">Abhi Chem — Practical Sustainable Chemistry</h1>
          <p className="mt-4 text-gray-700 max-w-xl">Localized solvent reclaiming, compact biodiesel production and contract processing built for small and medium enterprises.</p>
          <div className="mt-6 flex gap-3">
            <a href="#about" className="px-5 py-3 rounded bg-emerald-600 text-white">Learn More</a>
            <a href="#contact" className="px-5 py-3 rounded border border-emerald-600 text-emerald-700">Contact Us</a>
          </div>
        </div>
        <div className="flex-1">
          <img src="/images/hero-abhi.jpg" alt="Abhi plant" className="rounded-lg shadow-md object-cover w-full max-h-80"/>
        </div>
      </div>
    </header>
  )
}
