import React from 'react'
export default function ContactForm(){
  const [state, setState] = React.useState({name:'', email:'', company:'', mobile:'', city:'', comments:''})
  const [status, setStatus] = React.useState(null)
  function handleChange(e){ setState(s=>({...s, [e.target.name]: e.target.value})) }
  async function submit(e){
    e.preventDefault(); setStatus('loading')
    try{
      const res = await fetch((import.meta.env.VITE_API_BASE || '') + '/api/contact', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(state)})
      if(res.ok) setStatus('success')
      else setStatus('error')
    }catch(err){ setStatus('error') }
  }
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
      <form onSubmit={submit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input name="name" placeholder="Your Name" required value={state.name} onChange={handleChange} className="p-3 border rounded" />
        <input name="email" placeholder="Business email" required value={state.email} onChange={handleChange} className="p-3 border rounded" />
        <input name="company" placeholder="Business Name" value={state.company} onChange={handleChange} className="p-3 border rounded" />
        <input name="mobile" placeholder="Mobile" value={state.mobile} onChange={handleChange} className="p-3 border rounded" />
        <input name="city" placeholder="City" value={state.city} onChange={handleChange} className="p-3 border rounded" />
        <textarea name="comments" placeholder="Comments" value={state.comments} onChange={handleChange} className="p-3 border rounded sm:col-span-2" />
        <div className="sm:col-span-2 flex gap-3 items-center">
          <button type="submit" className="px-5 py-3 rounded bg-emerald-600 text-white">Submit</button>
          {status==='success' && <span className="text-green-600">Thanks — we received your request!</span>}
          {status==='error' && <span className="text-red-600">Submission failed — try again later.</span>}
          {status==='loading' && <span className="text-gray-600">Sending...</span>}
        </div>
      </form>
    </section>
  )
}
