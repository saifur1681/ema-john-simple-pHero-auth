import React from 'react';
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleUserLogIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    };

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
                    {
                        loading && <p style={{ color: 'orangered' }}>Loading.....</p>
                    }
                    <p style={{ color: 'red' }}>{error?.message}</p>
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