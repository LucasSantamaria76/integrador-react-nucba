import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  z-index: 100;
`;

export const WrapperNav = styled.div`
  position: relative;
  width: 100%;
  height: 140px;
  padding: 0 20px;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 2px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  display: grid;
  grid-template-columns: 15% 65% 20%;
  justify-items: center;
`;

export const NavBarContainer = styled.div`
  position: absolute;
  top: ${({ showMenu }) => (showMenu ? '42px' : '-400px')};
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
  border: 1px solid ${({ theme }) => theme.colors.text};
  pointer-events: ${({ showMenu }) => (showMenu ? 'auto' : 'none')};
  transition: all 0.3s ease-in-out;
  padding: 10px 0;

  @media screen and (min-width: 450px) {
    width: 400px;
  }

  @media screen and (min-width: 900px) {
    position: static;
    width: 100%;
    gap: 0;
    padding-top: 10px;
    max-width: 800px;
    background-color: transparent;

    display: grid;
    grid-template-columns: 75% 25%;
    grid-template-rows: 50% 50%;
    justify-items: start;
    align-items: center;

    border-radius: 0;
    border: none;
    opacity: 1;
    pointer-events: auto;
  }
`;

export const MenuCategoryText = styled.h4`
  position: absolute;
  bottom: 5px;
  left: 10px;
  color: ${({ theme }) => theme.colors.text};
`;

export const ContainerDarkMode = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
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
    padding-top: 20px;
    flex-direction: row;
    font-size: 0.8rem;
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
  top: 40px;
  left: 0;
  width: 120px;
  height: 50px;
  font-size: 1.5rem;
  font-family: 'Mr Dafoe';
  color: white;
  cursor: pointer;
  text-shadow: 0 0 0.05em #ff0000, 0 0 0.2em #ff0000, 0 0 0.3em #ff0000;
  transform: rotate(-20deg);
`;

export const Label = styled.label`
  display: inline-block;
  margin-left: 10px;
  padding-top: 10px;
  color: ${({ theme }) => theme.colors.text};
`;

export const MobileIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 0;
  height: 50px;
  cursor: pointer;
  font-size: 2.5rem;
  margin-bottom: 10px;

  @media screen and (min-width: 900px) {
    display: none;

    svg {
      fill: ${({ theme }) => theme.colors.text};
    }
  }
`;

export const UserContainer = styled.div`
  position: absolute;
  right: 5px;
  bottom: 5px;
  & > div {
    position: relative;
    //width: 100%;
    display: flex;
    justify-content: flex-end;
    img {
      margin: 5px 10px 0 0;
    }
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
  justify-content: flex-end;
  align-items: flex-end;
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
