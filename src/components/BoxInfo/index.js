import styled from 'styled-components';

export const BoxInfo = styled.div`
  position: absolute;
  top: ${({ cart }) => (cart ? '10px' : '75px')};
  left: ${({ cart }) => (cart ? '-25px' : '-150px')};
  display: ${({ show }) => (show ? 'inline-block' : 'none')};
  width: ${({ cart }) => (cart ? '100px' : '500px')};
  height: ${({ cart }) => (cart ? '15px' : '50px')};
  line-height: ${({ cart }) => (cart ? '15px' : '50px')};
  text-align: center;
  font-size: ${({ cart }) => (cart ? '0.6rem' : '1.5rem')};
  background-color: ${({ stock }) => (stock ? '#00ff08bf' : '#ff0000aa')};
  transform: rotate(-45deg);
`;
