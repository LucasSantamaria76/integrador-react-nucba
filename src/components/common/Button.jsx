import React, { Children } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: none;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.text2};
  color: ${({ theme }) => theme.colors.text2};
  border-radius: 5px;
  font-size: 15px;
`;

export const Button = ({ Children, handleClick }) => {
  return <StyledButton onClick={handleClick}>{Children}</StyledButton>;
};
