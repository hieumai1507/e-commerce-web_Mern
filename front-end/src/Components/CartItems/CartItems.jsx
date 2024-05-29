import React, {useContext} from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png'
const CartItems = () => {
  const {getTotalCartAmount,all_product, CartItems, RemoveFromCart} = useContext(ShopContext)
  return (
    <div className='cart-items'>
      <div className='cart-items-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if(CartItems[e.id] > 0) {
          return <div>
                      <div className='cart-items-format cart-items-format-main'>
                        <img src={e.image} alt="" className='carticon-product-icon' />
                        <p>{e.name}</p>
                        <p>{e.new_price}</p>
                        <button className='cart-items-quantity'>{CartItems[e.id]}</button>
                        <p>{e.new_price*CartItems[e.id]}</p>
                        <img className='cart-items-remove-icon' src={remove_icon} onClick={ () => {RemoveFromCart(e.id)}} alt='' />
                      </div>
                      <hr />
                  </div>
        }
        return null;
      })}
      <div className='cart-items-down'>
        <div className='cart-items-total'>
          <h1>cart Totals</h1>
          <div>
            <div className='cart-items-total-item'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='cart-items-total-item'>
              <p>Shopping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className='cart-items-total-item'>
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className='cart-items-promocode'>
          <p>If you have a promocode, Enter it here</p>
          <div className='cart-items-promobox'>
            <input type='text' placeholder='promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems
