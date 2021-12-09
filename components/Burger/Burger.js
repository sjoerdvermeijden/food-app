import React, { useContext } from "react";

import Location from "../Icons/Location";

import { BurgerWrapper } from "./Style";
import { CartContext } from "../../context/CartContext";
import { TotalContext } from "../../context/TotalContext";

function Burger({ id, name, restaurant, description, price }) {
  const [cartItems, setCartItems] = useContext(CartContext);
  const [cartTotal, setCartTotal] = useContext(TotalContext);

  const addToCart = (id) => {
    if (cartItems.find((item) => id === item.id)) {
      const cartItem = cartItems.find((item) => id === item.id);
      cartItem.count++;
    } else {
      setCartItems([
        ...cartItems,
        { id, name, price, description, restaurant, count: 1 },
      ]);

      setCartTotal(cartTotal + price);
    }
  };

  return (
    <>
      <BurgerWrapper>
        <div className="burger">
          <h3 className="burger__title">{name}</h3>
          <p className="burger__price">€{price}</p>
          <p className="burger__description">{description}</p>
          <p className="burger__location">
            <div className="burger__icon">
              <Location width="16px" height="16px" color="red" />
            </div>
            <div className="burger__restaurant">{restaurant}</div>
          </p>
          <button
            className="burger__add-to-cart"
            onClick={(e) => addToCart(id)}
          >
            +
          </button>
        </div>
      </BurgerWrapper>
    </>
  );
}

export default Burger;
