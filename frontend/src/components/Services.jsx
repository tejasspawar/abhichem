import React from 'react'
export default function Services(){
  const items = [
    {title: 'Solvent Recovery', text: 'Closed-loop reclamation for common industrial solvents.'},
    {title: 'Contract Processing', text: 'Small-batch chemical processing and blending.'},
    {title: 'Biodiesel Production', text: 'Local B100 and blends—quality-tested.'}
  ]
  return (
    <section id="services" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold mb-6">Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {items.map(i => (
          <div key={i.title} className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="font-semibold">{i.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{i.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
