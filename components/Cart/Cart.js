import React, { useContext, useEffect } from "react";

import { CartContext } from "../../context/CartContext";
import { TotalContext } from "../../context/TotalContext";

import { CartWrapper, CartList, CartTotal, EmtpyWrapper } from "./Style";

function Cart() {
  const [cartItems, setCartItems] = useContext(CartContext);
  const [cartTotal, setCartTotal] = useContext(TotalContext);

  useEffect(() => {
    const getItems = JSON.parse(localStorage.getItem("cartItems"));
    const getCartTotal = JSON.parse(localStorage.getItem("cartTotal"));
    setCartItems(getItems);
    setCartTotal(getCartTotal);
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  
  useEffect(() => {
    localStorage.setItem("cartTotal", JSON.stringify(cartTotal))
  }, [cartTotal]);

  const addButton = (id) => {
    const newList = cartItems.map((item) => {
      if (id === item.id) {
        item.count++;
        setCartTotal(cartTotal + item.price)
      }
      return item;
    });
    setCartItems(newList);
  };

  const removeButton = (id) => {
    const newList = cartItems.map((item) => {
      if (id === item.id) {
        item.count--;
        setCartTotal(cartTotal - item.price)
      }
      return item;
    });
    setCartItems(newList);

    cartItems.map((item) => {
      if (item.id === id && item.count === 0) {
        const filteredList = cartItems.filter((item) => item.id != id);
        setCartItems(filteredList);
      }
    });
  };

  return (
    <>
      <CartWrapper>
        {(cartItems === null || cartItems.length > 0) ? (
          <>
            <CartList>
              <ul>
                {cartItems.map((item) => {
                  const { name, id, price, count } = item;
                  return (
                    <li key={id}>
                      <div className="cart-item">
                        <div className="cart-item__content">
                          <div className="cart-item__count">{count}</div>
                          <div className="cart-item__name">{name}</div>
                          <div className="cart-item__price">???{price}</div>
                        </div>
                        <div className="cart-item__buttons">
                          <button onClick={(e) => removeButton(id)}>-</button>
                          <button onClick={(e) => addButton(id)}>+</button>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </CartList>
            <CartTotal>
              <ul>
                <li>Totaal: ???{cartTotal.toFixed(2)}</li>
              </ul>
            </CartTotal>
            <button className="cart-button">Afrekenen</button>
          </>
        ) : (
          <EmtpyWrapper>
            <span>Voeg iets toe aan je mandje</span>
          </EmtpyWrapper>
        )}
      </CartWrapper>
    </>
  );
}

export default Cart;
