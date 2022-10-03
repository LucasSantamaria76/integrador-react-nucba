import { css } from 'styled-components';

export const objColors = {
  danger: '#e6316d',
  success: '#3dd3a3',
  warning: '#ffaf51',
  info: '#00FFFF',
  black: '#000',
  white: '#fff',
  orange: '#424242',
  yellow: '#FFEB3B',
};

const Justify = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
};

export const Flex = css`
  display: flex;
  justify-content: ${({ justify }) => Justify[justify]};
  align-items: center;
  flex-direction: ${({ direction }) => (direction === 'column' ? 'column' : 'row')};
`;

export const getColors = (key, colors) => colors[key];
