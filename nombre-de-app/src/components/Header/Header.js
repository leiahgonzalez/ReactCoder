import React from 'react';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import Products from '../Products/Products';


const Header = () => {
    return (
        <>
        <Navbar/>
        
        <Banner/>
        <Products/>
        </>
    )   
}

export default Header;