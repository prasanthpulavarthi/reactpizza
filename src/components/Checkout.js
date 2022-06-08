import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../context/User.Context';

export default function Checkout() {

  const userCtx = useContext(UserContext);

  const totalPrice = userCtx.user.cart.reduce(  (acc, cur) => acc+cur.price, 0)

  return (
      < div className='container'>
        <h2>Checkout</h2>
        <label>credit card</label>
        <input type="text" className='form-control mt-1 mb-1' name="creditcard"/>
      <div>Order total : ${totalPrice}</div>
      <Link to="/success" className="btn btn-dark mt-2">Place Order</Link>
      </div>
  )
}
