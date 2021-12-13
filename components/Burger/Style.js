import styled from "styled-components";

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
      flex-shrink: 0;
      box-shadow: 3px 3px 4px 0px rgba(0, 0, 0, 0.75);

      &:not(:last-child) {
        margin-right: 20px;
      }

    }

    &__price {
      font-weight: bold;
    }

    &__description {
    }

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

      span {
        position: absolute;
        left: 8px;
        top: 14px;
        display: inline-block;
        width: 12px;
        height: 1px;
        background: var(--darkgray);

        &:nth-child(1) {
            
          .toggled & { 
            transform: rotate(45deg);
          }
        }

        &:nth-child(2) {
          transform: rotate(90deg);
          
          .toggled & {
            transform: rotate(-45deg);
          }

        }
        
      }

      &:hover,
      &:focus {
        cursor: pointer;
      }
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

  }

  .burger-cart {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding: 20px;
    background: var(--gray);

    &__inner {
      display: flex;
      align-items: center;
      width: 400px;
    }

    &__container {
      display: flex;
      align-items: center;

      &:not(:last-child) {
        margin-right: 15px;
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 35px;
        height: 35px;
      }

    }

    &__add-to-cart {
      background: var(--red);
      font-weight: bold;
      font-size: 16px;
      flex-grow: 1;
    }

    &__count {
      display: inline-block;
      color: var(--darkgray);
      padding: 3px 10px;
    }

  }
`;
