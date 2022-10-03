import styled, { css } from 'styled-components';
import { getColors } from './../../styles/objectAndFunctions';

const variant = ({ bg, outline, h, theme }) => {
  const sizeFont = parseInt(h) / 2.5;
  const unit = h.toLowerCase().endsWith('rem') ? 'rem' : h.slice(-2);

  return css`
    font-size: ${sizeFont + unit};
    background-color: ${outline ? 'transparent' : getColors(bg, theme.colors)};
    border: 2px solid ${getColors(bg, theme.colors)};
    color: ${outline ? getColors(bg, theme.colors) : theme.colors.text};
  `;
};

export const ButtonStyled = styled.button`
  height: ${({ h }) => h};
  width: ${({ w }) => w};
  border-radius: ${({ r }) => r};
  box-shadow: ${({ shadow, theme }) => (shadow ? theme.shadow : 'none')};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  ${variant};
  :active {
    box-shadow: none;
  }
  ${({ disabled }) =>
    disabled &&
    css`
      background-color: #cfcfcf;
      border: #cfcfcf;
      color: #bbb;
      box-shadow: 'none';
      cursor: not-allowed;
    `}
`;

export const ButtonFavStyled = styled.button`
  position: ${({ pos }) => (pos ? 'absolute' : 'static')};
  bottom: 5px;
  right: 5px;
  background-color: transparent;
  border: none;
  font-size: ${({ size }) => size + 'rem'};
`;
