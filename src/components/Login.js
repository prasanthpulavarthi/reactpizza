import React, { useContext } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../api/Myservice';
import { UserContext } from '../context/User.Context';

export default function Login() {
    const [state, setState] = useState({ "mail": "", "password": "", })
    const userCtx = useContext(UserContext);
     const navigate=useNavigate();

    function LoginHandler(event) {
        event.preventDefault();

        getUser(state.mail, state.password).then( res => {
            if(res.data.length > 0){
                userCtx.loginUser({name:res.data[0].email});
                navigate("/menu")
            }else{
                alert("invalid Credentials")
            }
        })
    

    }

    const handler = (event) => {
        let { name, value } = event.target;
        setState({ ...state, [name]: value });
    }
    return (

        <>
         <div className='container'>

            <h2>Login</h2>
            <form onSubmit={LoginHandler}>
                <input type="text" name="mail" onChange={handler} className="form-control mb-3" />
                <input type="password" className="form-control mb-3" name="password" onChange={handler} />
                <input type="submit" value="Login" className='bg-dark text-white'/>
            </form>
         </div>
        </>
    )
}
