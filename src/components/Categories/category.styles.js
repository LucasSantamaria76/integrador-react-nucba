import styled from 'styled-components';

export const CategoryStyled = styled.div`
  display: ${({ menu }) => (menu ? 'block' : 'none')};
  width: 100%;
  color: ${({ selected, theme }) => (selected ? theme.colors.text2 : theme.colors.text)};
  font-size: 1rem;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  @media screen and (min-width: 900px) {
    display: block;
  }
`;

export const SubCategoryStyled = styled(CategoryStyled)`
  display: block;
  font-size: 0.9rem;
  color: ${({ selected }) => (selected ? '#f00' : '#00f')};
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
  height: calc(100vh - 160px);
  overflow-y: auto;

  &::-webkit-scrollbar {
    height: 1px;
    width: 1px;
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
  }
  @media screen and (min-width: 900px) {
    display: none;
  }
`;
