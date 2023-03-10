import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {

    const menuList = <>
        <li className='lg:px-2 custom'>
            <NavLink
                to=''
                className={({ isActive }) => isActive ? "active" : null}
            >
                Home
            </NavLink>
        </li>
        <li className='lg:px-2 custom'>
            <NavLink
                to='/item1'
                className={({ isActive }) => isActive ? "active" : null}
            >
                Item 1
            </NavLink>
        </li>
        <li className='lg:px-2 custom'>
            <NavLink
                to='/item2'
                className={({ isActive }) => isActive ? "active" : null}
            >
                Item 2
            </NavLink>
        </li>
        <li className='lg:px-2 custom'>
            <NavLink
                to='/item3'
                className={({ isActive }) => isActive ? "active" : null}
            >
                Item 3
            </NavLink>
        </li>
        <li className='lg:px-2 custom'>
            <NavLink
                to='/log-in'
                className={({ isActive }) => isActive ? "active" : null}
            >
                Log In
            </NavLink>
        </li>
        <li className='lg:px-2 custom'><Link>Log Out</Link></li>
    </>

    return (
        <section>
            <div className="navbar">
                <div className="navbar-start">
                    <Link to='/' className="btn btn-ghost normal-case text-2xl font-extrabold">Chat App</Link>
                </div>
                <div className="dropdown ml-auto">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 ml-[-160px] p-2 shadow bg-base-100 rounded-box w-52">
                        {menuList}
                    </ul>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="flex space-x-6">
                        {menuList}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Header;