import React from 'react'
export default function Products(){
  const prods = [
    {name: 'Reclaimed THF', spec: '≥99.5%'},
    {name: 'Recovered MEK', spec: '≥99%'},
    {name: 'Biodiesel B100', spec: 'EN 14214 compatible'}
  ]
  return (
    <section id="products" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold mb-6">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {prods.map(p => (
          <div key={p.name} className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="font-semibold">{p.name}</h3>
            <p className="text-sm text-gray-600 mt-2">{p.spec}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
