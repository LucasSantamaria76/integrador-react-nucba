import styled from 'styled-components';

export const CartContainer = styled.div`
  position: relative;
  ${({ card }) => !card && 'place-self: center end;'}
  ${({ card }) => !card && 'grid-column: 3/4;'}
  ${({ card }) => !card && ' grid-row: 1/2;'};
  ${({ card }) => card && 'position: absolute;'};
  ${({ card }) => card && 'right: 15px;'};
  ${({ card }) => card && 'bottom: 30px;'};

  cursor: ${({ stock }) => (!!stock ? 'pointer' : 'not-allowed')};
`;

export const CartImg = styled.img`
  width: 45px;
  height: 45px;
`;

export const Badge = styled.div`
  position: absolute;
  //${({ card }) => (card ? 'bottom: 30px;' : 'top: 0px;')};
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
