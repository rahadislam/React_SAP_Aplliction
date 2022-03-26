import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    const {name,price,img}=cart;


    return (
        
            <div className='cartShow'>
                <img src={img} alt="" />
                <span>{name}</span>
                <span>${price}</span>

            </div>
       
    );
};

export default Cart;