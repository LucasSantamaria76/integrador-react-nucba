import styled from 'styled-components';

export const WrapperNav = styled.div`
  width: 100%;
  height: 100px;
  padding: 0 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 2px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;

  /*   @media screen and (min-width: 1024px) {
    height: 100px;
  } */
`;

export const NavBarContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  height: 50px;
  padding: 5px;
  background-color: #ffffff33;
  display: flex;
`;

export const ImgLogo = styled.img`
  width: 90px;
  height: 50px;
  margin-right: 40px;
  cursor: pointer;
`;

export const Logo = styled.h2`
  position: absolute;
  top: 25px;
  left: 0;
  font-size: 1.5rem;
  font-family: 'Mr Dafoe';
  opacity: 0.8;
  color: white;
  cursor: pointer;
  text-shadow: 0 0 0.05em #fff, 0 0 0.2em #fe05e1, 0 0 0.3em #fe05e1;
  transform: rotate(-12deg);
`;

export const Label = styled.label`
  display: none;
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.text};
  @media screen and (min-width: 1024px) {
    display: inline-block;
  }
`;

export const LocationContainer = styled.div`
  margin-left: 120px;
  display: flex;
  & div {
    margin-left: 5px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    & p:first-child {
      position: absolute;
      top: -12px;
      font-size: 0.8rem;
      color: #efecec;
    }
  }
`;

export const Menu = styled.nav`
  margin-left: 50px;
  display: none;
  font-size: 1rem;
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
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }
`;
