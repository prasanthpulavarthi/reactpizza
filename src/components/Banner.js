import React from 'react'
import { Link } from 'react-router-dom'

export default function Banner() {
  return (
    <>
    <div className='bg-light mt-5 container p-5'>

    <h1 className='bg-light text-dark  p-2'> Pizza Delivery</h1>
    <p>Welcome to pizza deliver Services This is the place when you may choose the most delicious pizza
      you like from wide variety of options.
    </p>
    <hr/>
    <p>We are performing deivery free of charge in case if your order is higher than 20$</p>
    <p className=' bg-dark text-white text-center m-2 p-3'><Link to="/login" className='text-white'>Sign in and order</Link></p>
    </div>
    </>
  )
}
