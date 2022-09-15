import styled from 'styled-components';

export const CategoryStyled = styled.div`
  display: ${({ menu }) => (menu ? 'block' : 'none')};
  width: 100%;
  color: ${({ selected, theme }) => (selected ? theme.colors.text2 : theme.colors.text)};
  align-items: center;
  font-size: 1rem;
  padding: 10px;
  cursor: pointer;
  @media screen and (min-width: 900px) {
    display: block;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.text2};
  }
`;

export const SubCategoryStyled = styled(CategoryStyled)`
  display: block;
  font-size: 0.9rem;
  color: ${({ selected }) => (selected ? '#f00' : '#00f')};
  &:hover {
    background-color: ${({ theme }) => theme.colors.text2};
  }
`;

export const MenuCategoryStyled = styled.div`
  position: absolute;
  top: 141px;
  left: 0;
  z-index: 111;
  display: flex;
  flex-direction: column;
  width: 310px;
  border: 1px solid ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.primary};
  height: 50vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.background02};
    outline: 1px solid slategrey;
    border-radius: 2px;
  }
  @media screen and (min-width: 900px) {
    display: none;
  }
`;
