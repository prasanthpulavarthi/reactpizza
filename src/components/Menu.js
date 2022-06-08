import React, { useContext } from 'react'
import pizza1 from '../assets/pizza1.png';
import pizza2 from '../assets/pizza2.png';
import pizza3 from '../assets/pizza3.png';
import { UserContext } from '../context/User.Context';

const pizzaList = [
  {
    name: 'Cheese Burger',
    price: 18.3,
    img: pizza1
  },
  {
    name: 'Crane',
    price: 20,
    img: pizza2
  },
  {
    name: 'Don Bacon',
    price: 26.3,
    img: pizza3
  },
  {
    name: 'Julinee',
    price: 26.3,
    img: pizza3
  },
  {
    name: 'cheese',
    price: 26.3,
    img: pizza3
  },
  {
    name: 'Cipollo',
    price: 26.3,
    img: pizza3
  }
]

export default function Menu() {

  const userCtx = useContext(UserContext);

  return (
    <>
      <div className='container'>
        <div className='row'>
          {

          pizzaList.map((item,i)=>{
              return(
                <div className='col-4' key={i}>

                <div className="card mb-3 ">
                  <img src={item.img} className="card-img-top p-2" alt="..." width="50" height="100"/>
                  <div className="card-body">
                    <h5 className="card-title text-center">{item.name}</h5>
                    <button type='button' onClick={() => userCtx.addToCart(item)} className="bg-dark text-white m-2">add to cart</button>
                    <i>${item.price}</i>
                  </div>
                </div>
              </div>

              )
          })
          }
         
        </div>
      </div>
    </>
  )
}
