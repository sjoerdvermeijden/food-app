import styled from "styled-components";

export const RecipeWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const RecipeList = styled.div`
  display: flex;
  align-items: flex-start;

  ul {
    list-style: none;
    margin-right: 40px;

    &:not(:last-child) {
      margin-right: 20px;
    }
  }

  li {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;
