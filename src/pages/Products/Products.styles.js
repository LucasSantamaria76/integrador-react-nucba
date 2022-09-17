import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 150px;
  width: 100%;
  height: calc(100vh - 160px);
  display: flex;

  @media screen and (min-width: 900px) {
    display: grid;
    grid-template-columns: 17% 83%;
    grid-template-rows: auto;
  }
`;

export const ProductsContainer = styled.div`
  width: 100%;
  height: calc(100vh - 160px);
  padding: 10px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  overflow-y: auto;
  @media screen and (min-width: 900px) {
    grid-column: 2 / 3;
  }
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary};
    outline: 1px solid slategrey;
    border-radius: 2px;
  }
`;

export const CategoryContainer = styled.div`
  display: none;
  @media screen and (min-width: 900px) {
    grid-column: 1 / 2;
    width: 100%;
    padding: 20px 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 160px);
    overflow-y: auto;
  }
  &::-webkit-scrollbar {
    height: 1px;
    width: 1px;
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
  }
`;
