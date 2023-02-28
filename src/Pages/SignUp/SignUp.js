import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    return (
        <div className='sign-up flex items-center min-h-screen'>
            <div className="card flex w-full max-w-sm shadow-2xl mx-auto mt-[-56px] bg-transparent">
                <div className="card-body">
                    <div>
                        <h1 className='text-center text-2xl text-white font-semibold'>Chat App Log In</h1>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold font-serif text-white">Name</span>
                        </label>
                        <input type="text" placeholder="Enter Your Name" className="bg-transparent custom-input" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold font-serif text-white">Image</span>
                        </label>
                        <input type="file" accept=".png, .jpg, .jpeg" placeholder="choose your profile picture" className="bg-transparent custom-input" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold font-serif text-white">Email</span>
                        </label>
                        <input type="email" placeholder="Enter Your Email" className="bg-transparent custom-input" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold font-serif text-white">Password</span>
                        </label>
                        <input type="password" placeholder="Enter Your Password" className="bg-transparent custom-input" />
                        <label className="label">
                            <span className="label-text font-bold font-serif text-white">Confirm Password</span>
                        </label>
                        <input type="password" placeholder="Enter Your Password" className="bg-transparent custom-input" />

                        {/* navigate user to the log in page */}
                        <label className='label flex justify-start'>
                            <div className='font-semibold text-purple-600'>Already have an account? Please <Link to='/log-in' className='text-blue-600 hover:underline'>Log In</Link></div>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn signup-button bg-transparent"><span className='signup'>Sign Up</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;