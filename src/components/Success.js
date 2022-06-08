import React, { useContext, useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom';
import { UserContext } from '../context/User.Context';

export default function Success() {

  const userCtx = useContext(UserContext);
  const menuHandler=()=>{
    Navigate('/menu')
  }

  useEffect( () => {
    userCtx.clearCart();
  }, [] )

  return (
    
    <div className='container mt-5'>
    <h2>Order has been placed successfully!</h2>
    <p className='bg-info text-success p-3'>you will receive notification by email with other details</p>
    <button className='bg-dark text-white' ><Link to="/menu" className='bg-dark text-white'>Go an order somemore</Link></button>
    </div>
  )
}
