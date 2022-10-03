import styled from 'styled-components';
import { Flex } from '../../styles/objectAndFunctions';

export const ContainerStyled = styled.main`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  overflow-y: auto;
  ${Flex}

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary};
    outline: 1px solid slategrey;
    border-radius: 2px;
  }
`;
