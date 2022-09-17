import styled from 'styled-components';

export const ProductsCheckoutWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  @media screen and (min-width: 900px) {
    margin: 120px 0 0;
    width: 40%;
    height: calc(100vh - 80px);
  }
  @media (min-width: 1200px) {
    width: 50%;
  }
`;
