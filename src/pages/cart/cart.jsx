import React, { useContext } from 'react';
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './cartItem';
import "./cart.css";
import {useNavigate } from 'react-router-dom';


export const Cart = () => {
  const{cartItems,getTotalCartAmount} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate()
  return (
    <div className='cart'>
      <div>
      {totalAmount > 0 ? <h1>Your Cart Items</h1> : ''}
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product) => {
          if(cartItems[product.id] !== 0){
            return <CartItem data={product}/>
          }
        })}
      </div>
      {totalAmount > 0 ?
      <div className='checkout'>
        
        <p>Subtotal: {totalAmount}€</p>
        <button onClick={()=>navigate('/')}>Back To Shop</button>
        <button onClick={()=>navigate('/checkout')} >Checkout</button>
      </div>
      : <h1>Your Cart is Empty</h1>}
      </div>
  )
}

