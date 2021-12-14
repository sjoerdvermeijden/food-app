import styled from "styled-components";

export const BurgerWrapper = styled.div`
  .burger {
    position: relative;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    background: var(--lightgray);

    &.toggled {
      .burger__cart-toggle {
        span {
          &:nth-child(1) {
            transform: rotate(-45deg);
          }

          &:nth-child(2) {
            transform: rotate(45deg);
          }
        }
      }
    }

    &__title,
    &__price,
    &__description,
    &__location {
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }

    &__content {
      display: flex;
      align-items: flex-start;
      padding: 20px;
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

        &:nth-child(2) {
          transform: rotate(90deg);
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

    &__checkout {
      background: var(--gray);
      padding: 20px;
    }

    .burger-checkout {
      &__inner {
        width: 400px;
        margin: 0 auto;

        .burger-cart {
          display: flex;

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

        .burger-toppings {

          &:not(:last-child) {
            margin-bottom: 20px;
          }

          &__label {
            display: inline-block;
            font-size: 14px;

            &:not(:last-child) {
              margin-bottom: 10px;
            }
          }

          &__list {
          }
          
          &__topping {
            display: flex;
            align-items: center;
            font-size: 14px;
            
            &:not(:last-child) {
              margin-bottom: 5px;
            }

          }

          &__title {

            &:not(:last-child) {
              margin-right: 10px;
            }

          }

          &__price {
            
          }

          &__check {
            margin-top: 1px;
            
            &:not(:last-child) {
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
`;
