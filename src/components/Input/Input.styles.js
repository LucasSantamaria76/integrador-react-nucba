import styled from 'styled-components';
import { motion } from 'framer-motion';

export const InputContainerStyled = styled.div`
  position: relative;
  width: ${({ width }) => (width ? width + 50 + 'px' : '100%')};
  height: 68px;
`;

export const InputStyled = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ width }) => (width ? width + 'px' : '100%')};
  height: 40px;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
  padding: 0 10px;
  background-color: ${({ theme }) => theme.colors.surface};
  border: ${({ isError }) => (!isError ? 'none' : '1px solid #FF0000')};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 3px;
  outline: none;

  &::placeholder {
    opacity: 0.9;
  }
`;

export const SelectStyled = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ width }) => (width ? width + 'px' : '100%')};
  height: 40px;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.text};
  padding: 0 10px;
  background-color: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 3px;
  outline: none;
  border: ${({ isError }) => (!isError ? 'none' : '1px solid #ff0000')};

  option {
    font-size: 1rem;
  }
`;

export const ErrorMessageStyled = styled.p`
  position: absolute;
  bottom: 8px;
  left: 0;
  margin: 0;
  padding: 0;
  color: #ff0000;
  font-family: Calibri, 'Trebuchet MS', sans-serif;
  font-size: 0.82rem;
  font-weight: 100;
`;

export const CloseIcon = styled(motion.span)`
  position: absolute;
  top: 5px;
  left: ${({ width }) => (width ? width - 24 + 'px' : 'calc(100% - 24px)')};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.2rem;
  margin-top: 6px;
  vertical-align: middle;
  transition: all 200ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.text2};
  }
`;
