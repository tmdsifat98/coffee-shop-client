import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='flex items-center gap-7 justify-center'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/addCoffee'>Add Item</NavLink>
            <NavLink to='/auth/signin'>Login</NavLink>
            <NavLink to='/auth/signup'>Sign up</NavLink>
            <NavLink to='/users'>Users</NavLink>

        </div>
    );
};

export default Navbar;