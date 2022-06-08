import React, { useContext } from 'react'
import { UserContext } from '../context/User.Context';
import pizzaLogo from '../assets/pizzalogo.jpg'
import { Link, useNavigate } from 'react-router-dom';


export default function Navbar() {

  const userCtx = useContext(UserContext)

  const navigate = useNavigate();

  const logoutHandler = () => {
    
    userCtx.logoutUser();
    navigate('/banner');
  }
  const cartHandler=()=>{
    navigate('/cart')
  }
  const menuHandler=()=>{
    navigate('/menu')
  }

  return (
    <>
      {
        userCtx.user.isLogged ? (
          <nav className='navbar container navbar-light bg-light d-flex justify-content-between'>
            <div className='navbar-brand'>
              <img src={pizzaLogo} width="50" height="50"/>
            </div>
            <div>
              <button type="button" className='btn' onClick={menuHandler}>Menu</button>
              
              <button type="button" className='btn btn-outline'  onClick={cartHandler}>Cart <span className='bg-dark text-white p-1'>{userCtx.user.cart.length}</span></button>
              <button type="button" className='btn'>Profile</button>
              <button type="button " className="btn btn-outline-dark" onClick={logoutHandler}>Logout</button>

            </div>
          </nav>


        )
          :
          (
            <nav className='navbar container navbar-light bg-light d-flex justify-content-between'>
               <div className='navbar-brand'>
              <img src={pizzaLogo} width="50" height="50"/>
            </div>
              <div>
                <Link to="/signup" className="btn btn-outline-dark">Sign up</Link>
                
                <Link to="/login"  className="btn btn-outline-dark ms-1 text-black"  >Login</Link>
              </div>
            </nav>
          )
      }
    </>
  )
}
