import styled from 'styled-components';

export const MenuUserContainer = styled.div`
  position: absolute;
  top: 141px;
  right: 0;
  z-index: 111;
  display: flex;
  flex-direction: column;
  width: 180px;
  border: 1px solid ${({ theme }) => theme.colors.text};
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
