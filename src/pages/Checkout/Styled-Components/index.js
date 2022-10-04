import styled from 'styled-components';
<<<<<<< HEAD
import { ContainerStyled } from '../../../components/Container/styles';

export const CheckoutWrapper = styled(ContainerStyled)`
  flex-direction: column;
  justify-content: flex-start;
=======
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
>>>>>>> refs/remotes/origin/master
  gap: 15px;
  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const FormWrapper = styled.div`
  width: 100%;
<<<<<<< HEAD
  height: 80%;
=======
  height: 90%;
  margin-top: 150px;

>>>>>>> refs/remotes/origin/master
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
<<<<<<< HEAD
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
=======
  h2 {
    margin-bottom: 20px;
  }
  div {
    padding-left: 40px;
  }
>>>>>>> refs/remotes/origin/master
  button {
    margin: 0 auto;
  }
  @media screen and (min-width: 900px) {
<<<<<<< HEAD
    width: 50%;
    height: calc(100vh - 160px);
  }
  @media (min-width: 1200px) {
    form {
      width: 70%;
    }
=======
    width: 60%;
    height: calc(100vh - 185px);
>>>>>>> refs/remotes/origin/master
  }
`;

export const ProductsCheckoutWrapper = styled.div`
<<<<<<< HEAD
  width: 100%;
  height: calc(100vh - 75px);
=======
  width: 100vw;
>>>>>>> refs/remotes/origin/master
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  @media screen and (min-width: 900px) {
<<<<<<< HEAD
    width: 50%;
    height: 98%;
  }
  /*   @media (min-width: 1200px) {
  } */
=======
    margin: 120px 0 0;
    width: 40%;
    height: calc(100vh - 80px);
  }
  @media (min-width: 1200px) {
    width: 50%;
  }
>>>>>>> refs/remotes/origin/master
`;
