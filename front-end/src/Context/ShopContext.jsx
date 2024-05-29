import React, {createContext} from "react";
import all_product from "../Components/Assets/all_product";
export const ShopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < all_product.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
}
const ShopContextProvider = (props) => {
  const [CartItems, setCartItems] = React.useState(getDefaultCart);

  const addToCart = (ItemId) => {
    setCartItems((prev) => ({...prev, [ItemId]: prev[ItemId] + 1}));
    console.log(CartItems);
  }
  const RemoveFromCart = (ItemId) => {
    setCartItems((prev) => ({...prev, [ItemId]: prev[ItemId] - 1}));
  }
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for(const item in CartItems) {
      if(CartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item));
        totalAmount += CartItems[item] * itemInfo.new_price;
      }
    }
    return totalAmount;
  }
  const getTotalCartItems = () => {
    let totalItem = 0;
    for(const item in CartItems) {
      if(CartItems[item] > 0) {
        totalItem += CartItems[item];
      }
    }
    return totalItem;
  }
  const contextValue = {getTotalCartItems, getTotalCartAmount, all_product, CartItems, addToCart, RemoveFromCart};

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}
export default ShopContextProvider;