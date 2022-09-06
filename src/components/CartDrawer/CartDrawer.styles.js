import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { Button } from '../common';

export const ContainerStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 200;
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.boxShadow};

  @media screen and (min-width: 900px) {
    width: 700px;
  }
`;

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 110;
  width: 100%;
  height: 100vh;
  background-color: #000000aa;

  ${({ isHidden }) =>
    !isHidden &&
    css`
      backdrop-filter: blur(3px);
    `}
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
    background: ${({ theme }) => theme.colors.text2};
    border-radius: 8px;
  }
`;

export const CardCartContainer = styled.div`
  width: 99%;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.background02};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.text2};
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
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
  margin: 0;
  border-right: 1px solid ${({ theme }) => theme.colors.text2};
  background-color: #fff;
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  overflow: hidden;
`;

export const CardBody = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
`;

export const ProductName = styled.h5`
  width: 65%;
`;

export const QuantityContainer = styled.div`
  width: 50%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    margin-left: 30px;
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
    background-color: ${({ theme }) => theme.colors.text2};
    border-radius: 5px;
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
    justify-content: space-between;
  }
  span {
    color: #f00;
  }
  .discount {
    color: #0f0;
  }
`;

export const SubTotal = styled(ProductPrice)`
  width: 40%;
  flex-direction: row;
  align-items: center;
`;

export const StockStyled = styled.p`
  width: 10%;
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
    box-shadow: ${({ disabled, theme }) => (disabled ? 'none' : theme.boxShadow)};
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
  background: none;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.text2};
  border-radius: 3px;
  font-size: 1.5rem;
  line-height: 35px;
  box-shadow: ${({ theme }) => theme.boxShadow};
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
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  span {
    font-size: 1rem;
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
`;
