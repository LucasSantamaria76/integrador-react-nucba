import styled from 'styled-components';

export const WrapperNav = styled.div`
  position: relative;
  padding: 0 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 2px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  display: flex;
  justify-content: space-between;
  z-index: 100;
`;

export const NavBarContainer = styled.div`
  position: absolute;
  //top: 112px;
  top: ${({ showMenu }) => (showMenu ? '112px' : '-400px')};
  //right: ${({ showMenu }) => (showMenu ? '10px' : '-400px')};
  right: 5px;
  width: 100%;
  height: auto;
  z-index: 99;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 30px;

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 2px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  pointer-events: ${({ showMenu }) => (showMenu ? 'auto' : 'none')};
  transition: all 0.3s ease-in-out;
  padding: 10px 0;

  @media screen and (min-width: 450px) {
    width: 400px;
  }

  @media screen and (min-width: 900px) {
    position: static;
    width: 60%;
    height: 100px;
    max-width: 1000px;
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
  padding-top: 10px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Menu = styled.nav`
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;

  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
    &:hover {
      text-decoration: underline;
      background-color: ${({ theme }) => theme.colors.hover};
    }
    &.active {
      color: ${({ theme }) => theme.colors.text2};
      cursor: default;
    }
    &.active:hover {
      text-decoration: none;
      background-color: transparent;
    }
  }
  @media screen and (min-width: 900px) {
    flex-direction: row;
    font-size: 1rem;
    gap: 20px;
    & a {
      &:hover {
        background-color: transparent;
      }
    }
  }
`;

export const MobileIcon = styled.div`
  cursor: pointer;
  font-size: 2.5rem;
  padding-top: 5px;

  @media screen and (min-width: 900px) {
    display: none;

    svg {
      fill: ${({ theme }) => theme.colors.text};
    }
  }
`;

export const ContainerDarkMode = styled.div`
  display: flex;
  gap: 5px;
  @media screen and (min-width: 900px) {
    flex-direction: column;
  }
`;
