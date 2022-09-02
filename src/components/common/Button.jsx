import styled from 'styled-components';

const StyledButton = styled.button`
  width: ${({ width }) => (width ? width : '100%')};
  height: 50px;
  background: none;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.text2};
  color: ${({ theme }) => theme.colors.text2};
  border-radius: 3px;
  font-size: 1.2rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
  &:active {
    box-shadow: none;
  }
`;

export const Button = ({ type = 'button', children, handleClick, width }) => (
  <StyledButton type={type} onClick={handleClick} width={width}>
    {children}
  </StyledButton>
);
