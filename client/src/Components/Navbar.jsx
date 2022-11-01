import React from 'react'

function Navbar() {
  return (
    <div className='flex p-4 justify-between items-center border-b-2'>
        <h1 className='font-bold text-lg'>Suppot Desk</h1>
        <div className='flex gap-3 font-bold'>
            <p>Login</p>
            <p>Register</p>
        </div>
    </div>
  )
}

export default Navbar