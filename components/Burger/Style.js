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
    
    &__location {
      display: flex;
      font-weight: bold;      
    }

    &__cart-toggle {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      right: 0;
      width: 30px;
      height: 30px;
      border: 1px solid var(--darkgray);
    }

    &__icon {
      margin-top: 1px;

      &:not(:last-child) {
        margin-right: 5px;
      }

    }

    &__cart {
      display: flex;
    }

    &__cart-container {
      display: flex;
      align-items: center;
      
      &:not(:last-child) {
        margin-right: 10px;
      }
      
    }
    
    &__add-to-cart {
      background: var(--red);
    }

    &__count {
      display: inline-block;
      color: var(--darkgray);
      padding: 3px 10px;
    }

  }
`;