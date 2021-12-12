import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";

import { BurgerWrapper } from "./Style";
import { CartContext } from "../../context/CartContext";
import { TotalContext } from "../../context/TotalContext";
import { HamburgerContext } from "../../context/HamburgerContext";

function Burger({
  id,
  name,
  image,
  restaurant,
  description,
  toggle,
  price,
  count,
}) {
  const [cartItems, setCartItems] = useContext(CartContext);
  const [cartTotal, setCartTotal] = useContext(TotalContext);
  const [burgerItems, setBurgerItems] = useContext(HamburgerContext);
  const [burgerCount, setBurgercount] = useState(0);

  const itemPrice = count * price;

  const cartFunction = (id) => {
    const newList = burgerItems.map((item) => {
      if (item.id === id) {
        item.toggle = !item.toggle;
        setBurgercount(0)
      } else {
        item.toggle = false;
        setBurgercount(0)
      }
      return item;
    });

    setBurgerItems(newList);
  };

  const counterAdd = (id) => {
    const newList = burgerItems.map((item) => {
      if (item.id === id) {
        item.count++;
      }
      return item;
    });
    setBurgerItems(newList);
  };

  const counterMinus = (id) => {
    const newList = burgerItems.map((item) => {
      if (item.id === id) {
        item.count--;
      }
      return item;
    });
    setBurgerItems(newList);
  };

  const addToCart = (id) => {
    burgerItems.map((item) => {
      if (id === item.id) {
        setBurgercount(item.count)
      }
    })

    if (cartItems.length > 0) {
      if (cartItems.find((item) => id === item.id)) {
        const cartItem = cartItems.find((item) => id === item.id);
        const totalCount = cartItem.count + burgerCount;
        cartItem.count = totalCount
      } else {
        setCartItems([...cartItems, { id, name, price, description, restaurant, count }]);
      }
    } else {
      setCartItems([{ id, name, price, description, restaurant, count }]);
    }
    setCartTotal(cartTotal + count * price);
  };

  return (
    <>
      <BurgerWrapper>
        {toggle ? (
          <>
            <div className="burger toggled">
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
                <div
                  className="burger__cart-toggle"
                  onClick={(e) => cartFunction(id)}
                >
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
            <div className="burger-cart">
              <div className="burger-cart__inner">
                <div className="burger-cart__container">
                  <button
                    className="burger-cart__remove"
                    onClick={(e) => counterMinus(id)}
                  >
                    -
                  </button>
                  <span className="burger-cart__count">{count}</span>
                  <button
                    className="burger-cart__add"
                    onClick={(e) => counterAdd(id)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="burger-cart__add-to-cart"
                  onClick={(e) => addToCart(id)}
                >
                  €{itemPrice.toFixed(2)}
                </button>
              </div>
            </div>
          </>
        ) : (
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
              <div
                className="burger__cart-toggle"
                onClick={(e) => cartFunction(id)}
              >
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
      </BurgerWrapper>
    </>
  );
}

export default Burger;
