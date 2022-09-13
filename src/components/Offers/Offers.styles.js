import styled from 'styled-components';

export const Container = styled.div`
  width: 96%;
  max-width: 1200px;
  height: 800px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.boxShadow};
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  overflow-y: auto;

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
