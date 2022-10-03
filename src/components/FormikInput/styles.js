import styled, { css } from 'styled-components';

export const common = css`
  width: ${({ width }) => (!!width ? width + 'px' : 'inherit')};
  height: 40px;
  font-size: 1.1rem;
  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.colors.text};
  padding-left: 10px;
  background-color: ${({ theme }) => theme.colors.surface};
  border: ${({ isError }) => (!isError ? 'none' : '1px solid #FF0000')};
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 5px;
  outline: none;
  &::placeholder {
    opacity: 0.9;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  width: ${({ width }) => width};
  height: 90px;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  margin-bottom: 15px;

  @media (min-width: 900px) {
    position: static;
    height: 80px;
    margin: 0;
    line-height: 40px;
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-template-rows: 1fr 1fr;
    grid-column-gap: 10px;
  }
`;

export const FieldContainer = styled.div`
  position: relative;
  width: inherit;
  height: 40px;

  @media (min-width: 900px) {
    grid-column: 2/3;
  }
`;

export const InputStyled = styled.input`
  ${common}
`;

export const SelectStyled = styled.select`
  ${common}
  width: 100%;
  option {
    color: ${({ theme }) => theme.colors.secondaryText};
    font-size: 1rem;
  }
`;

export const IconDelString = styled.p`
  position: absolute;
  top: 0;
  right: ${({ labelWidth, width }) => (width !== '100%' ? labelWidth + 'px' : '1px')};
  height: 40px;
  margin: 1px 0;
  padding: 0 5px;
  font-size: 1.2rem;
  line-height: 40px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  :active {
    color: ${({ theme }) => theme.colors.danger};
  }
`;

export const ErrorMessageStyled = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 0;
  padding: 0;
  color: #ff0000;
  font-family: Calibri, 'Trebuchet MS', sans-serif;
  font-size: 0.9rem;
  font-weight: 100;
  line-height: 20px;
  grid-column: 2/3;
  @media (min-width: 900px) {
    position: static;
  }
`;
