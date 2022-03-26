// import React, { useState } from 'react';
// import Cart from '../Cart/Cart';
import './Shop.css';

const Shop = (props) => {
    const {img,name,price,ratings,seller}=props.name;
    const handelar=props.event
    // const [carts,setcarts]=useState([])

    // const handelar=(info)=>{
    //     const newcart=[...carts,info];
    //     setcarts(newcart);
    // }
    // <Cart name={carts}></Cart>
    return (
        <div>
           <div className="cart">
               <img src={img} alt="" />
               <div className='information'>
               <p className='headline'>{name}</p>
               <h5>Price:{price}</h5>
               </div>
               <div className="btn">
               <button onClick={()=>handelar(props.name)}>
                  <p>Add To Cart</p></button>
               </div>
               
           </div>
           
        </div>
    );
};

export default Shop;