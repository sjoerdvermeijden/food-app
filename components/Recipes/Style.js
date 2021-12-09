import styled from "styled-components";

export const RecipeWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const RecipeList = styled.div`
  display: flex;
  align-items: flex-start;

  .recipe-list {
    list-style: none;
    margin-right: 40px;

    &__item {

      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }

    &:not(:last-child) {
      margin-right: 20px;
    }

  }

`;
