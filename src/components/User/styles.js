import styled from 'styled-components';

export const UserContainer = styled.div`
  place-self: center start;
  grid-column: 2/3;
  grid-row: 1/2;
  @media (max-width: 400px) {
    p {
      font-size: 0.7rem;
    }
  }
  @media (min-width: 900px) {
    place-self: center end;
    // margin-right: 85px;
    grid-column: 3/4;
    grid-row: 2/3;
  }
`;

export const ButtonUser = styled.button`
  width: 100%;
  height: 50px;
  line-height: 30px;
  background-color: transparent;
  cursor: pointer;
  border: none;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  gap: 10px;
  img {
    width: 35px;
    border-radius: 50%;
  }
  svg {
    fill: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
  }
`;

export const MenuUserContainer = styled.div`
  position: absolute;
  top: 75px;
  right: ${({ showMenu, posMenuUser }) => (showMenu ? posMenuUser : '-250px')};
  z-index: 111;
  display: flex;
  flex-direction: column;
  width: 200px;
  border: 2px solid ${({ theme }) => theme.colors.text};
  border-radius: 5px;
  box-shadow: 6px 6px 8px 0px rgba(0, 0, 0, 0.75);
  background: ${({ theme }) => theme.colors.primary};
  transition: right 0.2s ease-in-out;
  @media (min-width: 900px) {
    top: 155px;
    margin-left: -10px;
  }
`;

export const MenuUserItem = styled.div`
  width: 100%;
  font-size: 1.2rem;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryText};
  }
`;
