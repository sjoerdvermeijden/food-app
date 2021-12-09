import styled from 'styled-components';

export const BurgerWrapper = styled.div`
  background: var(--lightgray);

  .burger {
    position: relative;
    padding: 20px;

    &__title {
      
      &:not(:last-child) {
        margin-bottom: 10px;
      }
      
    }

    &__price {
      font-weight: bold;

      &:not(:last-child) {
        margin-bottom: 10px;
      }

    }
    
    &__description {
      
      &:not(:last-child) {
        margin-bottom: 10px;
      }
      
    }
    
    &__restaurant {
      font-weight: bold;      
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