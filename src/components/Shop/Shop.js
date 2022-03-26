
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Shop.css';

const Shop = (props) => {
    const {img,name,price}=props.name;
    const handelar=props.event
    return (
        <div>
           <div className="cart">
               <img src={img} alt="" />
               <div className='information'>
               <h2 className='headline'>{name}</h2>
               <h5>Price:{price}</h5>
               </div>
               <div className="btn">
               <button onClick={()=>handelar(props.name)}>
                  Add <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
                  
               </div>
               
           </div>
           
        </div>
    );
};

export default Shop;