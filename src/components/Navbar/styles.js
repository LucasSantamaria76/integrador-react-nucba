import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Flex } from '../../styles/objectAndFunctions';
import { BackgroundHeader } from './../Header/styles';

export const NavbarWrapper = styled.div`
  position: absolute;
  top: 0;
  right: ${({ showMovilMenu }) => (showMovilMenu ? '0' : '-700px')};
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: -2px 0 16px 0 rgba(0, 0, 0, 0.75);
  width: 300px;
  height: 100%;
  font-size: 2rem;
  z-index: ${({ showMovilMenu }) => (showMovilMenu ? '9999' : '1000')};
  ${Flex}
  gap: 10px;
  transition: right 0.5s ease-in-out;
  svg {
    margin-left: 10px;
  }
  @media (min-width: 900px) {
    position: static;
    font-size: 1.2rem;
    width: 100%;
    height: 150px;
    box-shadow: none;
    background-image: none;
    background-color: transparent;
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

export const IconClose = styled.div`
  height: 60px;
  align-self: start;
  cursor: pointer;
  :hover {
    transform: scale(1.3);
  }
  :active {
    svg {
      fill: ${({ theme }) => theme.colors.danger};
    }
  }
  @media (min-width: 900px) {
    display: none;
  }
  svg {
    fill: ${({ theme }) => theme.colors.text};
  }
`;

export const Menu = styled.nav`
  width: 100%;
  height: 100%;
  ${Flex}
  align-items: stretch;
  gap: 10px;
  a {
    text-align: center;
    line-height: 60px;
    &:hover {
      background-color: ${({ theme }) => theme.colors.hover};
    }
  }
  @media (min-width: 900px) {
    grid-row: 2 / 3;
    place-self: center start;
    a {
      margin: 0 10px;
      &:hover {
        background-color: transparent;
        border-bottom: 3px solid ${({ theme }) => theme.colors.text};
      }
    }
  }
`;

export const NavLinked = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  &.active {
    color: ${({ theme }) => theme.colors.secondaryText};
    cursor: default;
  }
`;
