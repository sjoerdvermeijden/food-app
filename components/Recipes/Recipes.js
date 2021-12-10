import React, { useEffect, useState, useContext } from "react";

import { CartContext } from "../../context/CartContext";
import { HamburgerContext } from "../../context/HamburgerContext";

import { RecipeWrapper, RecipeList } from "./Style";

import Block from "../Block/Block";
import Wrap from "../Wrap/Wrap";

import Burger from "../Burger/Burger";
import Cart from "../Cart/Cart";

function Recipes() {
  const [burgerItems, setBurgerItems] = useContext(HamburgerContext)
  const [cartItems, setCartItems] = useContext(CartContext);

  return (
    <>
      <Block>
        <Wrap>
          <RecipeWrapper>
            <RecipeList>
              <ul className="recipe-list">
                {burgerItems.map((burger) => {
                  return (
                    <li className="recipe-list__item" key={burger.id}>
                      <Burger {...burger} />
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
