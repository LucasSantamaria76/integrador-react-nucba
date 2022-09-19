import styled from 'styled-components';
import { MainContainer } from '../../../components/common';

export const MyShoppingWrapper = styled(MainContainer)`
  width: 98%;
  padding: 0;
  padding-top: 20px;
  h2 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.text2};
    text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2), 0px -5px 35px rgba(255, 255, 255, 0.3);
  }
  h3 {
    font-size: 1.1rem;
    margin-bottom: 5px;
  }
  #header {
    width: 100%;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  & > div {
    display: flex;
    //flex-direction: column;
    align-items: center;
    font-size: 1rem;
    select {
      text-align: center;
      position: absolute;
      left: 20px;
    }
  }
  @media screen and (min-width: 900px) {
    h2 {
      font-size: 1.8rem;
      margin-bottom: 15px;
    }
    #header {
      height: 150px;
    }
  }
`;
export const ShoppingContainer = styled.div`
  width: 100%;
  padding-top: 20px;
  background-color: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.boxShadow};
  display: flex;
  // flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  gap: 10px;

  &::-webkit-scrollbar {
    height: 1px;
    width: 1px;
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
  }
  @media screen and (min-width: 900px) {
    height: 65vh;
    //padding: 0 20px;
    //flex-direction: row;
    //justify-content: center;
    //    flex-wrap: wrap;
    //gap: 10px;
  }
`;

export const MyShoppingCard = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 5px;
  margin-bottom: 10px;
  box-shadow: ${({ theme }) => theme.boxShadow};
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
  border: 1px solid ${({ theme }) => theme.colors.text2};
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  margin-top: 5px;
  @media screen and (min-width: 450px) {
    height: 100px;
  }
`;
