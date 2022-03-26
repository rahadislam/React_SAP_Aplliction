
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { useEffect, useState } from 'react';
import Cart from './components/Cart/Cart';

function App() {
       const [products,setProduct]=useState([]);
       useEffect(()=>{
         fetch('data.json')
         .then(res=>res.json())
         .then(data=>setProduct(data))
       },[]);

      const [carts,setcarts]=useState([])

      const handelar=(values)=>{
      const newcart=[...carts,values];
        setcarts(newcart);

        
    
       }
       
  return (
    <div className="App">
      <Header/>
      <div className='cart_details'>
        
      <h1> Shop all Details </h1>
      {
        carts.map(cart=><Cart cart={cart}></Cart>)
      }
        
      <button className='btn_lucky'>CHOOSE 1 FOR ME</button>
      <button className='btn_rest'>CHOOSE AGAIN</button>
      
      </div>
      
      <div className='products_design'>
      {
        products.map(product=><Shop 
          key={product.id} 
          event={handelar}
          name={product}></Shop>)
      }
      </div>
      
      
    </div>
  );
}

export default App;
