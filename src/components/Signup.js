import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';
import { addUSer } from '../api/Myservice';
export default function Signup() {

    const [state, setState] = useState({ email: '', pwd: "" });
    const [error, setError] = useState(false);
    const [error2, setError2] = useState(false);
    const [text, setText] = useState("");
    const [text2, setText2] = useState("");

    const navigate = useNavigate();
   
    const handler = (event) => {
        let { name, value } = event.target;
        setState({ ...state, [name]: value });
    }

    function postUser(event) {
        event.preventDefault();
        let result = validate()
        if (result) {
            addUSer(state)
                .then(res => {
                    if (res) {
                        alert("User Added")
                        navigate("/login")
                    }
                })
                .catch(err => console.log(err))
        }

    }
    const validate = () => {
        let result1 = validate1();
        let result2 = validate2();

        return result1 && result2;
    }
    const validate1 = () => {
        let regEx = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+[.com]+$"
        );
        if (state.email === "") {
            setError(true)
            setText("required")
            return false
        }
        else if (!regEx.test(state.email)) {
            setError(true)
            setText("enter valid email address")
            return false

        }
        else {
            setText("")
            return true
        }
    }
    const validate2 = () => {
        let regEx = new RegExp("^[A-Za-z0-9]*$");

        if (state.pwd === "") {
            setError2(true)
            setText2("required")
            return false
        }
        else if (!regEx.test(state.pwd)) {
            setError2(true)
            setText2("password should contain only alphabets and digits")
            return false

        }
        else {
            setText2("")
            return true
        }
    }
    
    return (
        <>
            <div className="container">

                <form onSubmit={postUser}>
                    <div className='form-group'>
                        <label> email</label>
                        <input type="text" className="form-control" name="email" onChange={handler} onBlur={validate1} />
                        {error ? <p className='text-danger'>{text}</p> : ""}
                    </div>
                    <div className='form-group'>
                        <label> password</label>
                        <input type="password" className="form-control" name="pwd" onChange={handler} onBlur={validate2} />
                        {error2 ? <p className='text-danger'>{text2}</p> : ""}
                    </div>
                   

                    <input type="submit" value="Add" className="btn btn-success mt-3" />


                </form>
            </div>
        </>
    )
}
