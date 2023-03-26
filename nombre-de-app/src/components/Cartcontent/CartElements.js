import { useContext } from "react";
import {dataContext} from "../Context/Datacontext";
import "./Cartcontent.css";
import CartItemCounter from "./CartItemCounter";

import React from "react";


const CartElements = () =>{
    const { cart } = useContext(dataContext);
    return cart.map((product) => {
        return(
            <div className="cartContent" key={product.id}>
                <img className="imagen" src={product.img} alt="product-card"/>
                <h3 className="name">{product.name}</h3>
                <CartItemCounter product={product} />
                <h4 className="precio">${product.price}</h4>
                
            </div>
        )
    })
}

export default CartElements;