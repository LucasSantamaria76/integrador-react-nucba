import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const ContainerStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9999;
  margin: 0;
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;

  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.shadow};

  @media screen and (min-width: 900px) {
    width: 700px;
  }
`;

export const CardsContainer = styled.div`
  width: 100%;
  height: 61%;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ isEmpty }) => (isEmpty ? 'center' : 'flex-start')};
  align-items: ${({ isEmpty }) => (isEmpty ? 'center' : 'flex-start')};
  align-content: ${({ isEmpty }) => (isEmpty ? 'center' : 'flex-start')};
  gap: 10px;

  &::-webkit-scrollbar {
    width: 4px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.secondaryText};
    border-radius: 8px;
  }
`;

export const CardCartContainer = styled.div`
  width: 99%;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.background02};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.secondaryText};
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  @media screen and (min-width: 450px) {
    height: 120px;
  }
`;

export const CartTitle = styled.div`
  width: 100%;
  height: 50px;
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    margin: 0;
  }
`;

export const CardImage = styled.div`
  position: relative;
  width: 80px;
  height: 100%;
  border-right: 1px solid ${({ theme }) => theme.colors.secondaryText};
  background-color: #fff;
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  overflow: hidden;
`;

export const CardBody = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ProductName = styled.h5`
  width: 50%;
  padding-right: 5px;
  @media screen and (min-width: 450px) {
    width: 65%;
  }
`;

export const QuantityContainer = styled.div`
  width: 60%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  div {
    display: flex;
  }
  button {
    align-self: center;
  }
  span {
    width: 37px;
    height: 37px;
    margin: 0 5px;
    text-align: center;
    line-height: 37px;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
  }
  @media screen and (min-width: 450px) {
    width: 45%;
    flex-direction: row;
    gap: 0;
  }
`;

export const ProductPrice = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 0.8rem;
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  span {
    color: #f00;
    text-align: right;
  }
  .discount {
    color: #0f0;
  }
  @media screen and (min-width: 450px) {
    flex-direction: row;
  }
`;

export const SubTotal = styled(ProductPrice)`
  width: 35%;
  height: 50px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 450px) {
    flex-direction: row;
  }
`;

export const StockStyled = styled.p`
  width: 20%;
  margin: 0;
  font-size: 0.8rem;
  line-height: 50px;
`;

export const BtnCart = styled.div`
  width: 35px;
  height: 35px;
  svg {
    width: 35px;
    height: 35px;
    padding: 6px;
    fill: ${({ disabled, theme }) => (disabled ? '#999' : theme.colors.text)};
    box-shadow: ${({ disabled, theme }) => (disabled ? 'none' : theme.shadow)};
    border-radius: 3px;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    background-color: ${({ theme }) => theme.colors.text2};
    &:active {
      fill: ${({ disabled, theme }) => (!disabled ? '#f00' : '#999')};
      box-shadow: ${({ disabled }) => !disabled && 'none'};
    }
  }
`;

export const BtnDeleteProduct = styled.button`
  width: 35px;
  height: 35px;
  background: transparent;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.secondaryText};
  border-radius: 3px;
  display: flex;
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadow};
  cursor: pointer;
  &:active {
    box-shadow: none;
  }
  svg {
    fill: #f00;
  }
`;

export const CartFooter = styled.div`
  width: 100%;
  height: 26%;
`;

export const BodyFooter = styled.div`
  margin-bottom: 5px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  span,
  h3 {
    font-size: 0.8rem;
  }

  div {
    display: flex;
    justify-content: space-between;
    .discount {
      color: #0f0;
    }
    .total {
      color: #f00;
      font-size: 1.4rem;
      font-weight: bold;
    }
  }
  .totalContainer {
    border-top: 1px solid ${({ theme }) => theme.colors.text};
    padding-top: 8px;
  }
  @media (min-width: 900px) {
    span,
    h3 {
      font-size: 1rem;
    }
  }
`;
