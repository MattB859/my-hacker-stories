import React, { useState } from 'react';
import { FaEnvelope, FaUserAlt, FaKey } from "react-icons/fa";
import './styled-form.css';


const Form = (props) => {

    const [state, setState] = useState({
        username: "",
        email: "",
        password: "",
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
                                placeholder='User Name'
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
                            placeholder='Email'
                            required
                        />
                        </div>
                        <label htmlFor='password'>Password</label>
                        <div className="input-container">
                        <FaKey className="icon" />
                        <input
                            onChange={handlePasswordChange}
                            type="text"
                            id="password"
                            value={state.password}
                            name="password"
                            placeholder='Password*'
                            required
                        />
                        </div>
                        <button type='submit'>Register</button>
                    </form>
            </div>
        </>
    )
}

export default Form;