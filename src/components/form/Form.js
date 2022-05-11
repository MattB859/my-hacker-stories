import React, { useState } from 'react';
import { FaEnvelope, FaUserAlt, FaKey, FaUnlockAlt } from "react-icons/fa";
import './styled-form.css';


const Form = (props) => {

    const [state, setState] = useState({
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
    });


    const handleUsernameChange = (event) => {
        setState({username: event.target.value})
    }
    const handleEmailChange = (event) => {
        setState({email: event.target.value})
    }
    const handlePasswordChange = (event) => {
        setState({password: event.target.value})
    }
    const handleConfirmPasswordChange = (event) => {
        setState({confirmpassword: event.target.value})
    }

    return (
        <>
            <div className='form-page'>
                <h1 className='form-title'>{props.title}</h1>
                <p>{props.name}</p>
                <hr/>  
                    <form>
                        <label htmlFor='username'>Username</label>
                        <div className="input-container">
                            <FaUserAlt className="icon" />
                            <input
                                onChange={handleUsernameChange}
                                type="text"
                                id="username"
                                value={state.username}
                                name="username"
                                placeholder='Username*'
                                required 
                            />
                        </div>
                        <label htmlFor='email'>Email</label>
                        <div className="input-container">
                        <FaEnvelope className="icon" />
                        <input
                            onChange={handleEmailChange}
                            type="email"
                            id="email"
                            value={state.email}
                            name="email"
                            placeholder='Email address*'
                            required
                        />
                        </div>
                        <label htmlFor='password'>Password</label>
                        <div className="input-container">
                            <FaKey className="icon" />
                            <input
                                onChange={handlePasswordChange}
                                type="password"
                                id="password"
                                value={state.password}
                                name="password"
                                placeholder='Password*'
                                required
                            />
                        </div>
                        <label htmlFor='password'>Confirm Password</label>
                        <div className="input-container">
                            <FaUnlockAlt className="icon" />
                            <input
                                onChange={handleConfirmPasswordChange}
                                type="password"
                                id="confirmpassword"
                                value={state.confirmpassword}
                                name="password"
                                placeholder='Confirm Password*'
                                required
                            />
                        </div>
                        <button className='form-btn' type='submit'>Register</button>
                    </form>
            </div>
        </>
    )
}

export default Form;