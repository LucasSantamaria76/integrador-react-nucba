import styled from 'styled-components';

export const SearchInputWrapper = styled.div`
  position: relative;
  height: 40px;
  width: 280px;
  display: flex;
  background-color: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 6px;
  overflow: hidden;
  @media screen and (min-width: 900px) {
    place-self: center start;
    width: 65%;
    grid-column: 1/2;
    grid-row: 1/2;
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
  height: 100%;
  background-color: #ccc;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.6rem;
  margin-right: 1rem;
  cursor: pointer;
`;

export const CloseIcon = styled.span`
  height: 100%;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.3rem;
  padding: 2px 7px;
  background-color: transparent;
  cursor: pointer;
  &:active {
    color: ${({ theme }) => theme.colors.danger};
  }
  @media (min-width: 900px) {
    padding-top: 5px;
  }
`;
