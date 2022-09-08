import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 150px;
  width: 100%;
  height: calc(100vh - 120px);
  display: flex;

  @media screen and (min-width: 900px) {
    display: grid;
    grid-template-columns: 17% 66% 17%;
    grid-template-rows: auto;
  }
`;

export const ProductsContainer = styled.div`
  width: 100%;
  padding-top: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  @media screen and (min-width: 900px) {
    grid-column: 2 / 3;
  }
`;

export const CategoryContainer = styled.div`
  display: none;
  @media screen and (min-width: 900px) {
    grid-column: 1 / 2;
    gap: 10px;
    width: 100%;
    padding-top: 30px;
    text-align: center;
    display: flex;
    flex-direction: column;
  }
`;
