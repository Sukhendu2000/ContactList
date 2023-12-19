import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg gradient-custom py-2'>
            <div className='container-fluid'>
                <Link to='/' className='navbar-brand fs-2 fw-bold text-white ml-3'>React Contact List App</Link>
            </div>
        </nav >
    )
}

export default Navbar;
