import styled from 'styled-components';

export const WrapperNav = styled.div`
  position: fixed;
  width: 100%;
  height: 100px;
  padding: 0 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 2px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;

  @media screen and (min-width: 909px) {
    justify-content: start;
  }
`;

export const NavBarContainer = styled.div`
  position: absolute;
  top: 108px;
  right: 8px;
  width: 100%;
  height: auto;
  max-width: 1000px;
  z-index: 99;

  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 30px;

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 2px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  opacity: ${({ showMenu }) => (showMenu ? '1' : '0')};
  pointer-events: ${({ showMenu }) => (showMenu ? 'auto' : 'none')};
  padding: 20px;
  transition: opacity 0.3s ease-in-out;

  @media screen and (min-width: 450px) {
    width: 400px;
  }

  @media screen and (min-width: 900px) {
    position: static;
    width: 60%;
    height: 100px;
    padding: 5px 5px 25px;
    display: grid;
    grid-template-columns: 70% 30%;
    grid-template-rows: 50% 50%;
    justify-items: start;
    align-items: start;

    border-radius: 0;
    box-shadow: none;
    opacity: 1;
    pointer-events: auto;
  }
`;

export const Logo = styled.div`
  position: relative;
  width: 120px;
  height: 100px;
  margin-top: 10px;
  @media screen and (min-width: 900px) {
    margin-right: 100px;
  }
`;

export const ImgLogo = styled.img`
  width: 80%;
  height: 50%;
  cursor: pointer;
`;

export const TextLogo = styled.h2`
  position: absolute;
  top: 15px;
  left: 0;
  width: 100%;
  height: 50%;
  font-size: 1.5rem;
  font-family: 'Mr Dafoe';
  color: white;
  cursor: pointer;
  text-shadow: 0 0 0.05em #ff0000, 0 0 0.2em #ff0000, 0 0 0.3em #ff0000;
  transform: rotate(-12deg);
`;

export const Label = styled.label`
  display: inline-block;

  margin-left: 10px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Menu = styled.nav`
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 20px;

  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    &:hover {
      text-decoration: underline;
    }
    &.active {
      color: ${({ theme }) => theme.colors.text2};
    }
    &.active:hover {
      text-decoration: none;
      cursor: default;
    }
  }
  @media screen and (min-width: 900px) {
    flex-direction: row;
    font-size: 1rem;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 900px) {
    display: flex;
    align-items: center;
    cursor: pointer;

    svg {
      fill: ${({ theme }) => theme.colors.text};
      margin-right: 0.5rem;
      font-size: 2.5rem;
    }
  }
`;

export const ContainerBlock = styled.div`
  display: flex;
  gap: 5px;
  ${({ column }) => column && 'flex-direction: column'};
`;
