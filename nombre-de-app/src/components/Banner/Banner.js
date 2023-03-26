import React from 'react';
import './Banner.css';
import fotonike from '../imagenes/fotonike.jpg';


const Banner = () => {
    return (
        <div className='banner'>
            <img className='fotonike' src={fotonike} alt='zapas'/>
            <p className='tutienda'>Tu tienda de zapatillas favorita</p>
        </div>
    )
}

export default Banner