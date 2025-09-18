import React from 'react'
export default function PlantDetails(){
  const units = [
    {name: 'Pilot Plant — Pune', size: '2 TPD', desc: 'Fully instrumented small-scale distillation and recovery.'},
    {name: 'Compact Skid Unit', size: '0.5 TPD', desc: 'Containerized, plug-and-play solution for remote sites.'}
  ]
  return (
    <section id="plant" className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-emerald-800 mb-6">Plant & Units</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {units.map(u => (
            <div key={u.name} className="p-6 bg-white rounded-lg shadow">
              <h3 className="font-semibold text-lg">{u.name}</h3>
              <p className="text-sm text-gray-600">Capacity: <strong>{u.size}</strong></p>
              <p className="mt-2 text-gray-700">{u.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
