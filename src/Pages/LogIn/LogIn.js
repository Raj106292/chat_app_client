import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LogIn.css';

const LogIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // send an email to the user with password recovery link
    const handleForgetPassword = () => {
        console.log('hello');
    }

    // user log in to the app
    const handleUserLogIn = (e) => {
        e.preventDefault();

        console.log(email, password);
    }

    return (
        <div className='log-in flex items-center min-h-screen'>
            <div className="card flex w-full max-w-sm shadow-2xl mx-auto mt-[-56px] bg-transparent">
                <div className="card-body">
                    <div>
                        <h1 className='text-center text-2xl font-semibold'>Chat App Log In</h1>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold font-serif">Email</span>
                        </label>
                        <input type="email" placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)} value={email} className="bg-transparent custom-input" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold font-serif">Password</span>
                        </label>
                        <input type="text" placeholder="Enter Your Password" onChange={(e) => setPassword(e.target.value)} value={password} className="bg-transparent custom-input" />
                        <label className="label flex justify-end">
                            <div className="label-text-alt link link-hover font-medium" onClick={handleForgetPassword}>Forgot password?</div>
                        </label>

                        {/* navigate user to the sign up page */}
                        <label className='label flex justify-start'>
                            <div className='font-semibold text-purple-600'>Don't have an account? Please <Link to='/sign-up' className='text-blue-600 hover:underline'>Sign Up</Link></div>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button onClick={handleUserLogIn} className="btn login-button bg-transparent"><span className='logIn'>Log In</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;