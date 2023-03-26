 import React from "react";
import CartElements from "./CartElements";
import CartTotal from "./CartTotal";
import { useContext } from "react";
import {dataContext} from "../Context/Datacontext";
import "./Cartcontent.css";

 const Cartcontent = () => {
    const { cart } = useContext(dataContext);


    return cart.length > 0 ? (
        <>
        <CartElements/>
        <CartTotal/>
        </>
    ): (
        <h2 className="carritovacio">Tu carrito esta vacio</h2>
    );
 };

 export default Cartcontent;