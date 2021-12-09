import styled from 'styled-components';

export const BurgerWrapper = styled.div`
  padding: 20px;
  background: var(--lightgray);

  .burger {

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

      &:not(:last-child) {
        margin-bottom: 10px;
      }
      
    }

    &__add-to-cart {

    }

  }
`;