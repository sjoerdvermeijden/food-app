import styled from "styled-components";

export const CartWrapper = styled.div`
  padding: 20px;
  background: var(--lightgray);
  min-width: 400px;

  .cart-item {
    display: flex;
    flex-direction: column;

    &__content {
      display: flex;

      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }

    &__count {
      
      &:not(:last-child) {
        margin-right: 8px;
      }

    }

    &__name {
      margin-right: auto;
    }

    &__price {
      font-weight: bold;
    }

    &__buttons {
      display: flex;

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;

        &:not(:last-child) {
          margin-right: 8px;
        }
      }
    }
  }

  .cart-button {
    border-radius: 0px;
    width: 100%;
    font-size: 16px;
  }
`;

export const CartList = styled.div`
  ul {
    list-style: none;
    margin-bottom: 20px;
    border-bottom: 1px solid var(--gray);

    li {
      padding: 20px 0;

      &:not(:last-child) {
        border-bottom: 1px solid var(--gray);
      }
    }
  }
`;

export const CartTotal = styled.div`
  
  ul {
    list-style: none;
    margin-bottom: 20px;
  }

  li {

  }
`;


export const EmtpyWrapper = styled.div`
  
  span {
    display: inline-block;
    font-weight: bold;
  }
`;