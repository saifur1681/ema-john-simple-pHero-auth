import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleUserLogIn = event => {
        event.preventDefault();
    }

    return (
        <div className='form-control'>
            <div>
                <h1 className='form-title' >Login</h1>
                <form onSubmit={handleUserLogIn} >
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name='email' required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name='password' required />
                    </div>
                    <input className="form-submit-btn" type="submit" value="Login" />
                </form>
                <p className="link-container">
                    New to Ema-John? <Link className="form-link" to="/signup" >Create an account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;