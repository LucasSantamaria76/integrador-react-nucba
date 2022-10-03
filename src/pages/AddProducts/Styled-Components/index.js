import styled from 'styled-components';
import { ContainerStyled } from '../../../components/Container/styles';

export const Container = styled(ContainerStyled)`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
`;

export const WrapperForm = styled.div`
  width: 100%;
  height: ${({ update }) => (update ? '800px' : '220vh')};
  background-image: url(${({ backgroundImage }) => backgroundImage});
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadow};
  overflow-x: hidden;
  @media (min-width: 750px) {
    height: ${({ update }) => (update ? '70vh' : 'auto')};
  }
  @media screen and (min-width: 900px) {
    margin-top: 20px;
    height: ${({ update }) => (update ? '75vh' : 'auto')};
    width: ${({ update }) => (update ? '45%' : '800px')};
    max-width: ${({ update }) => (update ? '700px' : '800px')};
  }
  form {
    width: 100%;
    height: 100%;
  }
`;

export const ContainerForm = styled.div`
  position: relative;
  width: 100%;
  height: ${({ update }) => (update ? '800px' : 'auto')};
  background-color: ${({ theme }) => theme.colors.backgroundHeader};
  padding: 15px;
  display: flex;
  flex-direction: column;
  @media (min-width: 480px) {
    .input {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
  @media (min-width: 750px) {
    height: 100%;
  }
  @media screen and (min-width: 900px) {
    justify-content: space-evenly;
    width: 100%;
  }
`;

export const ImgWrapper = styled.div`
  order: -1;
  position: relative;
  width: 80%;
  height: 300px;
  margin: 0 auto;
  margin-bottom: 20px;
  @media screen and (min-width: 750px) {
    position: ${({ update }) => (update ? 'relative' : 'absolute')};
    ${({ update }) => !update && 'bottom : 75px;'};
    ${({ update }) => !update && 'right : 40px;'};
    height: ${({ update }) => (update ? '240px' : '310px')};
    width: ${({ update }) => (update ? '260px' : '330px')};
  }
  @media (min-width: 1200px) {
    height: ${({ update }) => (update ? '250px' : '310px')};
    width: ${({ update }) => (update ? '270px' : '330px')};
  }
`;

export const ImgContainer = styled.img`
  background-color: ${({ src }) => (!!src ? '#fff' : 'transparent')};
  width: 100%;
  height: 300px;
  box-shadow: ${({ theme }) => theme.shadow};
  object-fit: contain;
  @media screen and (min-width: 750px) {
    height: ${({ update }) => (update ? '230px' : '310px')};
    width: ${({ update }) => (update ? '250px' : '350px')};
  }
  @media (min-width: 1200px) {
    height: ${({ update }) => (update ? '260px' : '310px')};
    width: ${({ update }) => (update ? '300px' : '330px')};
  }
`;

export const DblClickForImg = styled.h4`
  position: absolute;
  width: 100%;
  text-align: center;
  padding: 10px;
  color: ${({ theme }) => theme.colors.secondaryText};
  z-index: 99;
`;

export const BoxFlex = styled.div`
  width: 100%;
  height: 200vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (min-width: 900px) {
    width: 100%;
    height: 100%;
    height: calc(100vh - 180px);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;

export const LisContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundHeader};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LisWrapper = styled.div`
  height: 60vh;
  margin-top: 20px;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  box-shadow: ${({ theme }) => theme.shadow};
  label {
    margin: 10px;
  }
  select {
    width: 230px;
  }
  @media (min-width: 900px) {
    width: 40%;
    height: 75vh;
  }
`;

export const ComboBoxProduct = styled.div`
  width: 90%;
  height: 90%;
  margin-bottom: 10px;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 5px;
  overflow-y: auto;
  & > div {
    color: ${({ theme }) => theme.colors.secondaryText};
    font-size: 0.8rem;
    cursor: pointer;
  }
  .option {
    width: 98%;
    height: 70px;
    margin: 3px;
    border: 0.1rem solid ${({ theme }) => theme.colors.text};
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    align-items: center;
    gap: 15px;
    img {
      width: 70px;
    }
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
    border-radius: 5px;
  }
`;
