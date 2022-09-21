import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const [user] = useAuthState(auth);

    const handleNameBlur = event => {
        setName(event.target.value);
    }

    const handleAddressBlur = event => {
        setAddress(event.target.value);
    };

    const handlePhoneBlur = event => {
        setPhone(event.target.value);
    };

    const handleCreateUser = event => {
        event.preventDefault();

    };

    return (
        <div className='form-control'>
            <div>
                <h1 className='form-title' >Shipment Details</h1>
                <form onSubmit={handleCreateUser} >
                    <div className='input-group'>
                        <label htmlFor="name">Your Name</label>
                        <input onBlur={handleNameBlur} type="text" name='name' required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name='address' required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input value={user?.email} readonly name='email' required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="phone">Phone Number</label>
                        <input onBlur={handlePhoneBlur} type="text" name='phone' required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className="form-submit-btn" type="submit" value="Add Shipping" />
                </form>
            </div>
        </div>
    );
};

export default Shipment;