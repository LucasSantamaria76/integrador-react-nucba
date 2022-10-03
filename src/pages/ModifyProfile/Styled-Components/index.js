import styled from 'styled-components';
import { Flex } from '../../../styles/objectAndFunctions';

export const ProfileWrapper = styled.div`
  form {
    width: 100%;
    margin: 0 auto;
  }
  button {
    margin: 0 auto;
    margin-bottom: 10px;
  }
  width: 100%;
  @media (min-width: 900px) {
    height: 100%;
    background-color: ${({ theme }) => theme.colors.backgroundHeader};
    padding: 10px 25px;
  }
`;

export const ContainerPerfil = styled.div`
  width: 100vw;
  height: calc(100vh - 70px);
  margin-top: 20px;
  ${Flex}
  form {
    width: 96%;
  }
  @media (min-width: 500px) {
    form {
      width: 80%;
    }
  }
  @media (min-width: 900px) {
    height: calc(100vh - 155px);
  }
`;

export const InfoWrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    display: block;
    width: 100%;
    font-size: 1.5rem;
    text-align: center;
  }
  @media screen and (min-width: 900px) {
    width: 800px;
    height: 40%;

    margin-bottom: 10px;
    border-radius: 4px;
    background-image: url(${({ backgroundImage }) => backgroundImage});
    box-shadow: ${({ theme }) => theme.shadow};
    h2 {
      font-size: 2rem;
    }
  }
`;

export const ImgContainer = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.shadow};
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: contain;
`;

export const InfoContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-family: 'Mr Dafoe';
    font-size: 2rem;
    letter-spacing: 3px;
    text-align: center;
    color: ${({ theme }) => theme.colors.secondaryText};
    text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2), 0px -5px 35px rgba(255, 255, 255, 0.3);
  }
  p {
    margin: 0;
    font-size: 1rem;
  }
  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-evenly;
    h2 {
      font-size: 3rem;
      letter-spacing: 4px;
    }
    p {
      font-size: 1.2rem;
    }
  }
`;

export const FormWrapper = styled.div`
  width: 100%;
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 900px) {
    width: 800px;
    height: auto;
    margin: 0 auto;
    box-shadow: ${({ theme }) => theme.shadow};
    background-image: url(${({ backgroundImage }) => backgroundImage});
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
