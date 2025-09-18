import React from 'react'
export default function Sustainability(){
  return (
    <section id="sustainability" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-4">Sustainability</h2>
        <p className="text-gray-700 max-w-3xl">We measure and report KPIs focused on solvent recovery rate, CO2 avoided and water saved. Our compact units are designed for energy efficiency.</p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-6 border rounded"> <h3 className="text-lg font-bold">Recovery</h3><p className="text-sm text-gray-600">Up to 95% solvent recovery</p></div>
          <div className="p-6 border rounded"> <h3 className="text-lg font-bold">CO₂</h3><p className="text-sm text-gray-600">Metric tonnes avoided / year</p></div>
          <div className="p-6 border rounded"> <h3 className="text-lg font-bold">Water</h3><p className="text-sm text-gray-600">Lower water usage vs virgin process</p></div>
        </div>
      </div>
    </section>
  )
}
