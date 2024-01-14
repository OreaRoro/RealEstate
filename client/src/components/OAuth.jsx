import React from 'react'

export default function OAuth() {
    const handelGoogle = () => {}
  return (
    <button
        onClick={handelGoogle}
        type='button'
        className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-85'
    >
        Continue with google
    </button>
  )
}
