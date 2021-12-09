import React, { useEffect, useState, useContext } from "react";

import { CartContext } from "../../context/CartContext";

import { RecipeWrapper, RecipeList } from "./Style";

import { Burgers } from "../../burgers";

import Block from "../Block/Block";
import Wrap from "../Wrap/Wrap";

import Burger from "../Burger/Burger";
import Cart from "../Cart/Cart";

function Recipes() {
  const [hamburgers, setHamburgers] = useState([]);
  const [cartItems, setCartItems] = useContext(CartContext);

  useEffect(() => {
    setHamburgers(Burgers);
  }, []);

  return (
    <>
      <Block>
        <Wrap>
          <RecipeWrapper>
            <RecipeList>
              <ul className="recipe-list">
                {hamburgers.map((hamburger) => {
                  return (
                    <li className="recipe-list__item" key={hamburger.id}>
                      <Burger {...hamburger} />
                    </li>
                  );
                })}
              </ul>
            </RecipeList>
            <Cart />
          </RecipeWrapper>
        </Wrap>
      </Block>
    </>
  );
}

export default Recipes;
