import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { ImgLogo, Label, TextLogo, Menu, NavBarContainer, WrapperNav, Logo, MobileIcon, ContainerBlock } from './NavBar.styles';
import imageLogo from '../../assets/Free-Market-1080x675.webp';
import cartImg from '../../assets/cart.png';
import { Cart, CheckBoxTheme } from '../common';
import { NavLink, useNavigate } from 'react-router-dom';
import { VscChromeClose, VscMenu } from 'react-icons/vsc';

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const menu = [{ productos: 'Productos' }, { agregarProductos: 'Agregar productos' }];

  const handleClickLogo = () => navigate('/');
  const handleShowMenu = () => setIsMobile(!isMobile);

  return (
    <WrapperNav>
      <Logo>
        <ImgLogo src={imageLogo} onClick={handleClickLogo} />
        <TextLogo onClick={handleClickLogo}>Free Market</TextLogo>
      </Logo>
      <NavBarContainer showMenu={isMobile}>
        <SearchBar />
        <ContainerBlock column>
          <CheckBoxTheme />
          <Label>Dark Mode</Label>
        </ContainerBlock>
        <Menu isMobile={isMobile} onClick={handleShowMenu}>
          {menu.map((item) => (
            <NavLink to={`/${Object.keys(item)[0]}`} key={Object.keys(item)[0]} end>
              {Object.values(item)[0]}
            </NavLink>
          ))}
        </Menu>
      </NavBarContainer>
      <ContainerBlock>
        <Cart src={cartImg} onClick={handleClickLogo} />
        <MobileIcon>{isMobile ? <VscChromeClose onClick={handleShowMenu} /> : <VscMenu onClick={handleShowMenu} />}</MobileIcon>
      </ContainerBlock>
    </WrapperNav>
  );
};

export default NavBar;
