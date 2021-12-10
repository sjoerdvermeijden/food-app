import React, { useContext, useEffect } from "react";
import Image from "next/image";

import Location from "../Icons/Location";

import { BurgerWrapper } from "./Style";
import { CartContext } from "../../context/CartContext";
import { TotalContext } from "../../context/TotalContext";

function Burger({ id, name, image, restaurant, description, price, count }) {
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
    }
    setCartTotal(cartTotal + price);
  };

  return (
    <>
      <BurgerWrapper>
        <div className="burger">
          <figure className="burger__image">
            <Image
              src={image}
              alt="Hamburger"
              objectFit="cover"
              width={100}
              height={100}
              quality="100"
            />
          </figure>
          <div className="burger__info">
            <h3 className="burger__title">{name}</h3>
            <p className="burger__price">€{price}</p>
            <p className="burger__description">{description}</p>
            <div className="burger__cart-toggle">+</div>
            <div className="burger__cart">
              <div className="burger__cart-container">
                <button className="burger__remove">-</button>
                <span className="burger__count">{count}</span>
                <button className="burger__add">+</button>
              </div>
              <button className="burger__add-to-cart" onClick={(e) => addToCart(id)}>Add to cart</button>
            </div>
          </div>
        </div>
      </BurgerWrapper>
    </>
  );
}

export default Burger;
