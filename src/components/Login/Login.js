import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='form-control'>
            <div>
                <h1 className='form-title' >Login</h1>
                <form>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' required />
                    </div>
                    <input className="form-submit-btn" type="submit" value="Login" />
                </form>
                <p className="link-container">
                    New to Ema-John? <Link className="form-link"  to="/signup" >Create an account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;