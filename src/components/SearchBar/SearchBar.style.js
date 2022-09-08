import { motion } from 'framer-motion';
import styled from 'styled-components';

export const SearchInputWrapper = styled.div`
  position: relative;
  height: 40px;
  width: 300px;
  margin: 0 auto;
  margin-top: 5px;
  display: flex;
  padding: 2px 10px;
  background-color: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 2px;
  @media screen and (min-width: 900px) {
    width: 100%;
    margin: 10px 0;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
  background-color: transparent;

  &::focus {
    outline: none;
    &::placeholder {
      opacity: 0;
    }
  }
`;

export const SearchIcon = styled.span`
  color: ${({ theme }) => theme.colors.text2};
  font-size: 1.7rem;
  margin-right: 1rem;
  margin-top: 6px;
  cursor: pointer;
`;

export const CloseIcon = styled(motion.span)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.2rem;
  margin-top: 7px;
  vertical-align: middle;
  transition: all 200ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.text2};
  }
`;
