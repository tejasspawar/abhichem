import React from 'react'
export default function Footer(){
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6">
        <div>
          <h3 className="font-semibold">Abhi Chem</h3>
          <p className="text-sm text-slate-300 mt-2">Registered Partnership • Office: Pune</p>
        </div>
        <div className="text-sm text-slate-300">© {new Date().getFullYear()} Abhi Chem. All rights reserved</div>
      </div>
    </footer>
  )
}
