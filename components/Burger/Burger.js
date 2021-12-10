import React, { useContext, useEffect } from "react";
import Image from "next/image";

import Location from "../Icons/Location";

import { BurgerWrapper } from "./Style";
import { CartContext } from "../../context/CartContext";
import { TotalContext } from "../../context/TotalContext";

function Burger({
  id,
  name,
  image,
  restaurant,
  description,
  ingredients,
  price,
}) {
  const [cartItems, setCartItems] = useContext(CartContext);
  const [cartTotal, setCartTotal] = useContext(TotalContext);

  const addToCart = (id) => {
    if (cartItems.find((item) => id === item.id)) {
      const cartItem = cartItems.find((item) => id === item.id);
      cartItem.count++;
    } else {
      setCartItems([
        ...cartItems, { id, name, price, description, restaurant, count: 1 }
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
            <div className="burger__ingredients">
              <ul className="burger__ingredient-list">
                {ingredients.map((item) => {
                  return <li key={Math.random()}>{item}</li>;
                })}
              </ul>
            </div>
            <button
              className="burger__add-to-cart"
              onClick={(e) => addToCart(id)}
            >
              +
            </button>
          </div>
        </div>
      </BurgerWrapper>
    </>
  );
}

export default Burger;
