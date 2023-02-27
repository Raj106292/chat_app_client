import React from 'react';
import './LogIn.css';

const LogIn = () => {

    const handleForgetPassword = () => {
        console.log('hello');
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
                        <input type="text" placeholder="Enter Your Email" className="bg-transparent custom-input" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold font-serif">Password</span>
                        </label>
                        <input type="text" placeholder="Enter Your Password" className="bg-transparent custom-input" />
                        <label className="label flex justify-end">
                            <div className="label-text-alt link link-hover font-medium" onClick={handleForgetPassword}>Forgot password?</div>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn login-button bg-transparent"><span className='logIn'>Log In</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;