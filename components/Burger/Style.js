import styled from 'styled-components';

export const BurgerWrapper = styled.div`
  background: var(--lightgray);

  .burger {
    position: relative;
    display: flex;
    align-items: flex-start;
    padding: 20px;

    &__title,
    &__price,
    &__description,
    &__ingredients,
    &__location {

      &:not(:last-child) {
        margin-bottom: 10px;
      }

    }

    &__image {
      display: flex;
      box-shadow: 3px 3px 4px 0px rgba(0,0,0,0.75);

      &:not(:last-child) {
        margin-right: 20px;
      }
      
    }

    &__price {
      font-weight: bold;
    }
    
    &__description {}

    &__label {
      font-weight: bold;

      &:not(:last-child) {
        margin-right: 8px;
      }
      
    }

    &__ingredients {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
    }
    
    &__ingredient-list {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
    }
    
    &__location {
      display: flex;
      font-weight: bold;      
    }

    &__icon {
      margin-top: 1px;

      &:not(:last-child) {
        margin-right: 5px;
      }

    }

    &__add-to-cart {
      position: absolute;
      right: 0;
      top: 0;
      padding: 8px 10px;
      background: none;
      border: 1px solid var(--darkgray);
      border-radius: 0;
      color: var(--darkgray);
    }

  }
`;