import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form className='flex flex-col gap-4'>
        <input type="text" placeholder='email' className='border p-3 rounded-lg focus:outline-none' id='email' />
        <input type="password" placeholder='password' className='border p-3 rounded-lg focus:outline-none' id='password' />
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-85'>Sign Up</button>
      </form>
      <div className="flex gap-2 mt-4">
        <p>Have an account?</p>
        <Link to="/sign-up">
          <span className="text-blue-700">Sign Up</span>
        </Link>
      </div>
    </div>
  )
}
