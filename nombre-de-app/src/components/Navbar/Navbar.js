import React from 'react';
import './Navbar.css';
import Logo from '../imagenes/logo3.jpg';
import {Link} from 'react-router-dom';



const Navbar = () => {
    return (
        <div className='nav-container'>
            <nav className='navbar'><img className='logo' src={Logo} alt='logo'/></nav>
            <h1 className='navbar-logo'>The Shoe Shop</h1>
            <Link className='carrito' to={"/cart"}>🛒</Link>

        </div>
    )   
}

export default Navbar;