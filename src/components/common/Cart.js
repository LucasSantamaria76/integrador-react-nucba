import styled from 'styled-components';

export const Cart = styled.img`
  width: 45px;
  height: 45px;
  cursor: pointer;
`;

export const Badge = styled.div`
  position: absolute;
  bottom: ${({ card }) => (card ? '30px' : '25px')};
  right: ${({ card }) => (card ? '-2px' : '7px')};
  display: ${({ itemsInCart }) => (!!itemsInCart ? 'inline-block' : 'none')};
  width: 20px;
  height: 20px;
  text-align: center;
  font-size: 0.7rem;
  line-height: 20px;
  border-radius: 10px;
  background-color: #f00;
  color: #fff;
`;
