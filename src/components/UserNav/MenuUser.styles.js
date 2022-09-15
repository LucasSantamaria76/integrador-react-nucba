import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MenuUserContainer = styled(motion.div)`
  position: absolute;
  top: 141px;
  right: 0;
  z-index: 111;
  display: flex;
  flex-direction: column;
  width: 200px;
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background: ${({ theme }) => theme.colors.primary};
`;

export const MenuUserItem = styled.div`
  width: 100%;
  font-size: 1.2rem;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.text2};
  }
`;
