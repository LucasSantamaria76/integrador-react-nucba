import styled from 'styled-components';
import { ContainerStyled } from './../../../components/Container/styles';

export const MyShoppingWrapper = styled(ContainerStyled)`
  width: 100%;
  padding: 0;
  padding-top: 10px;

  h2 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.secondaryText};
    text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2), 0px -5px 35px rgba(255, 255, 255, 0.3);
  }
  & > h3 {
    font-size: 1.1rem !important;
    margin-bottom: 10px;
  }

  select {
    text-align: center;
    font-size: 1.5rem;
    option {
      font-size: 1.5rem;
    }
  }

  @media screen and (min-width: 900px) {
    h2 {
      font-size: 1.8rem;
      margin-bottom: 15px;
    }
  }
`;

export const ShoppingWrapper = styled.div`
  width: 94%;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 8px;
  overflow: hidden;
  @media screen and (min-width: 900px) {
    height: 75%;
  }
`;

export const ShoppingContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 20px;
  background-color: ${({ theme }) => theme.colors.backgroundHeader};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  gap: 10px;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: ${({ theme }) => theme.colors.background02};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.secondaryText};
    border-radius: 10px;
  }
`;

export const MyShoppingCard = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 5px;
  margin-bottom: 10px;
  box-shadow: ${({ theme }) => theme.shadow};
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 0.9rem;
    line-height: 15px;
    margin: 0;
  }
  @media screen and (min-width: 460px) {
    width: 400px;
    height: 500px;
  }
`;

export const ItemsContainer = styled.div`
  width: 98%;
  height: 66%;
  display: grid;
  grid-template-columns: 1fr;
  flex-wrap: wrap;
  overflow-y: auto;
  margin-bottom: 20px;

  h5 {
    font-size: 0.7rem;
    padding: 0;
  }
  &::-webkit-scrollbar {
    height: 1px;
    width: 1px;
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
  }
`;

export const DetailProduct = styled.div`
  width: 100%;
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  p {
    margin-left: 5px;
    font-size: 0.8rem;
    line-height: 15px;
  }
`;

export const Details = styled.div`
  width: 98%;
  height: 100px;
  align-self: flex-start;
  display: flex;
`;

export const DetailsLabel = styled(Details)`
  flex-direction: column;
  h5 {
    line-height: 20px;
  }
`;

export const DetailsAmounts = styled(DetailsLabel)`
  align-items: flex-end;
  h4,
  h5 {
    color: #f00;
  }
  h5:nth-child(2) {
    color: #0f0;
    &::before {
      content: '-';
    }
  }
`;

export const CardOrdersContainer = styled.div`
  width: 99%;
  height: 110px;
  background-color: ${({ theme }) => theme.colors.background02};
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.secondaryText};
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  margin-top: 5px;
  @media screen and (min-width: 450px) {
    height: 100px;
  }
`;
