import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../context/User.Context';

export default function Cart() {

  const userCtx = useContext(UserContext);
  const totalPrice = userCtx.user.cart.reduce(  (acc, cur) => acc+cur.price, 0)

  return (
    <div className='container'>
      <h2>Shopping Cart</h2>
    {
      userCtx.user.cart.map( (item, i) => {
        return (
          <div className='row py-2' key={i}>
            <div className='col-2'>
              <img src={item.img} alt="..." width="30" height="30" />
            </div>
            <div className='col-4'>{item.name}</div>
            <div className='col-2'>{item.price}</div>
            <div className='col-2'><input  type="number" placeholder='1'/></div>
            <div className='col-2 d-flex justify-content-end'>
              <button type="button" className='btn btn-dark ' onClick={() => userCtx.deleteFromCart(i)}>Delete</button>
            </div>
          </div>
        )
      } )
    }
    
    <div className='d-flex justify-content-between'>
      <div className='align-self-center'>${totalPrice}</div>
      <div>

    <button type="button" className='bg-dark'><Link to="/checkout" className='bg-dark text-white' style={{textDecoration:"none"}}>Checkout </Link></button>
      </div>
    </div>
    
     
    </div>
  )
}
