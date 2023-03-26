import { useContext } from "react";
import {dataContext} from "../Context/Datacontext";
import '../Products/Products.css';
import React from "react";

const Products = () => {
    const {data, buyProducts} = useContext(dataContext);


    return data.map((product) => {
        return(
            <div className="card" key={product.id}>
                <img className="imagen" src={product.img} alt='img1'/>
                <h3 className="name">{product.name}</h3>
                <h4 className="precio">${product.price}</h4>
                <button onClick={()=>buyProducts(product)} className="boton">Agregar al carrito</button>
            </div>
        )

    
    })
}

export default Products;