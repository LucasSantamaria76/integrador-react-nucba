import styled from 'styled-components';

export const WrapperNav = styled.div`
  position: relative;
  width: 100%;
  padding: 0 20px;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 2px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  display: grid;
  grid-template-columns: 15% 70% 15%;
  justify-items: center;
`;

export const NavBarContainer = styled.div`
  position: absolute;
  top: ${({ showMenu }) => (showMenu ? '112px' : '-400px')};
  right: 0;
  width: 100%;
  height: auto;
  z-index: 99;

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
    width: 100%;
    height: 110px;
    gap: 0;
    padding-top: 10px;

    max-width: 800px;

    display: grid;
    grid-template-columns: 80% 20%;
    grid-template-rows: 50% 50%;
    justify-items: start;
    align-items: start;
    /*     display: flex;
    flex-wrap: wrap; */

    border-radius: 0;
    box-shadow: none;
    opacity: 1;
    pointer-events: auto;
  }
`;

export const ContainerDarkMode = styled.div`
  display: flex;
  gap: 5px;
  @media screen and (min-width: 900px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const Menu = styled.nav`
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;

  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    height: 40px;
    line-height: 40px;
    padding-left: 10px;

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
    font-size: 0.8rem;
    padding-top: 10px;
    gap: 10px;
    & a {
      &:hover {
        background-color: transparent;
      }
    }
  }
  @media screen and (min-width: 1200px) {
    font-size: 1rem;
  }
`;

export const Logo = styled.div`
  position: relative;
  width: 120px;
  height: 100px;
  margin-top: 10px;
  margin-left: 80px;
  @media screen and (min-width: 900px) {
    margin-left: 0;
    width: 100%;
  }
`;

export const ImgLogo = styled.img`
  width: 90px;
  height: 50px;
  cursor: pointer;
`;

export const TextLogo = styled.h2`
  position: absolute;
  top: 15px;
  left: 0;
  width: 120px;
  height: 50px;
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

export const UserContainer = styled.div`
  width: 100%;
  div {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    img {
      margin: 5px 50px 0 0;
    }
  }
`;

export const ButtonUser = styled.button`
  width: 100%;
  height: 50px;
  background-color: transparent;
  cursor: pointer;
  border: none;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  justify-content: flex-end;
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
