import styled from 'styled-components';
import { ContainerStyled } from '../../../components/Container/styles';

export const CheckoutWrapper = styled(ContainerStyled)`
  flex-direction: column;
  justify-content: flex-start;
  gap: 15px;
  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const FormWrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  form {
    width: 90%;
  }
  h2 {
    margin-bottom: 20px;
  }
  /*
  div {
    padding-left: 40px;
  } */
  button {
    margin: 0 auto;
  }
  @media screen and (min-width: 900px) {
    width: 50%;
    height: calc(100vh - 160px);
  }
  @media (min-width: 1200px) {
    form {
      width: 70%;
    }
  }
`;

export const ProductsCheckoutWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 75px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  @media screen and (min-width: 900px) {
    width: 50%;
    height: 98%;
  }
  /*   @media (min-width: 1200px) {
  } */
`;
