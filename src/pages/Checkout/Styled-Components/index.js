import styled from 'styled-components';
import { MainContainer } from '../../../components/common';

export const CheckoutWrapper = styled(MainContainer)`
  width: 100vw;
  height: 100%;
  margin: 0;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const FormWrapper = styled.div`
  width: 100%;
  height: 90%;
  margin-top: 150px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    margin-bottom: 20px;
  }
  div {
    padding-left: 40px;
  }
  button {
    margin: 0 auto;
  }
  @media screen and (min-width: 900px) {
    width: 60%;
    height: calc(100vh - 185px);
  }
`;

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
