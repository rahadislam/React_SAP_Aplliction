
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { useEffect, useState } from 'react';
import Cart from './components/Cart/Cart';
import Random from './components/Random/Random';

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
        if(newcart.length>4){
          alert('you already 4 item selected');
        }
        else{
          setcarts(newcart);
        }
        
    
       }
       const [randoms,setrandom]=useState([])
       const addRandom=()=>{
        const random = carts[Math.floor(Math.random() * carts.length)]; 
          setrandom(random);
        
       }
       const rest=(carts)=>{
         setcarts([]);
       }
       
  return (
    <div className="App">
      <Header/>
      <div className='cart_details'>
        
      <h1> Shop all Details </h1>
      {
        carts.map(cart=><Cart key={cart.id} rest={rest} cart={cart}></Cart>)
      }
        
      <button className='btn_lucky' onClick={addRandom}>CHOOSE 1 FOR ME</button>
      <button className='btn_rest' onClick={rest}>CHOOSE AGAIN</button>
      <div className='random'>
      <Random name={randoms}></Random>
      </div>
      
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
