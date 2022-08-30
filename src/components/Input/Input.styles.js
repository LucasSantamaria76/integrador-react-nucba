import styled from 'styled-components';
import { motion } from 'framer-motion';

export const InputContainerStyled = styled.div`
  position: relative;
  width: ${({ size }) => (size ? size + 'rem' : 'auto')};
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  margin-right: 20px;
`;

export const InputStyled = styled.input`
  width: ${({ size }) => size + 'rem'};
  height: 40px;
  padding: 1.5rem 2rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  padding: 2px 10px;
  background-color: ${({ theme }) => theme.colors.surface};
  border: ${({ isError }) => (!isError ? 'none' : '1px solid #ff000099')};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 3px;
  outline: none;

  ::placeholder {
    font-size: 1.2rem;
    opacity: 80%;
  }
`;

export const SelectStyled = styled.select`
  width: ${({ width }) => width + 'rem'};
  height: 40px;
  padding: 1rem 1rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
  padding: 2px 10px;
  // background-color: ${({ isError, theme }) => (!isError ? theme.colors.surface : '#ff000099')};
  background-color: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 3px;
  outline: none;
  border: ${({ isError }) => (!isError ? 'none' : '1px solid #ff000099')};

  option {
    font-size: 1rem;
  }
`;

export const ErrorMessageStyled = styled.p`
  margin: 0;
  margin-top: 5px;
  color: #fb103d;
  font-size: 14px;
`;

export const CloseIcon = styled(motion.span)`
  position: absolute;
  top: 5px;
  left: ${({ pos }) => pos - 1.3 + 'rem'};
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
