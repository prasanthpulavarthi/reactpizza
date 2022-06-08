import React, { useState } from 'react'

export const UserContext = React.createContext();


export function UserContextProvider(props) {
    const [user, setUser] = useState({ name: '', isLogged: false, cart: [] });

    const loginUser = (userInfo) => {
        setUser({ name: userInfo.name, isLogged: true, cart: [] })
    }

    const logoutUser = () => {
        setUser({ name: '', isLogged: false, cart: [] })
    }
    const addToCart = (data) => {

        setUser((prevState) => { return { ...prevState, cart: prevState.cart.concat(data) } })

    }
    const deleteFromCart = (index) => {


        setUser((prevState) => {

            const cartItems = prevState.cart;

            cartItems.splice(index, 1)

            return { ...prevState, cart: [...cartItems] }
        })

    }

    const clearCart=(data)=>{

        setUser( (prevState) => { return { ...prevState, cart: []} } )

    }

    return (
        <UserContext.Provider value={{ loginUser, logoutUser, user, addToCart, deleteFromCart, clearCart }}>
            {props.children}
        </UserContext.Provider>
    )
}
