import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    const {name,price,img}=cart;
    // let name;
    // let price;
    // let img;
    // for(const cartinfo of cart){
    //     console.log(cartinfo);
    //     name=cartinfo.name;
    //     price=cartinfo.price;
    //     img=cartinfo.img;
    // }


    return (
        
            <div className='cartShow'>
                <img src={img} alt="" />
                <span>{name}</span>
                <span>{price}</span>

            </div>
       
    );
};

export default Cart;