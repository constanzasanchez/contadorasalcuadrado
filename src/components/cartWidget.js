import React from 'react';
import imgCart from '../img/shopBag.png';

function CartWidget() {
    return (
        <>
        <div className='cartNavLink'>
            <img
            src={imgCart}
            width="45"
            height="35"
            alt="cart"/>
            <p>0</p>
        </div>
        </>
    );
} 

export default CartWidget;