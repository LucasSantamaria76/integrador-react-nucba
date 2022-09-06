import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import {
  ImgLogo,
  Label,
  TextLogo,
  Menu,
  NavBarContainer,
  WrapperNav,
  Logo,
  MobileIcon,
  ContainerDarkMode,
  UserContainer,
  ButtonUser,
} from './NavBar.styles';
import imageLogo from '../../assets/Free-Market-1080x675.webp';
import cartImg from '../../assets/cart.png';
import { Badge, Cart, CheckBoxTheme, Wrapper } from '../common';
import { NavLink, useNavigate } from 'react-router-dom';
import { VscChromeClose, VscMenu } from 'react-icons/vsc';
import { FaUserCircle } from 'react-icons/fa';
import { logout, toggleVisibleCart } from '../../redux/slices';
import { useDispatch, useSelector } from 'react-redux';
import CartDrawer from './../CartDrawer/CartDrawer';

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart, isLogged, user } = useSelector((state) => state.user);

  const menu = ['inicio', 'productos', 'agregar productos'];

  const handleClickLogo = () => navigate('/');
  const handleShowMenu = () => setIsMobile(!isMobile);

  const handleLogin = () => {
    isLogged ? dispatch(logout()) : navigate('/login');
  };
  const amountOfProductsInCart = cart.items.reduce((acc, item) => (acc += item.quantity), 0);

  return (
    <Wrapper>
      <WrapperNav>
        <CartDrawer />
        <Logo>
          <ImgLogo src={imageLogo} onClick={handleClickLogo} />
          <TextLogo onClick={handleClickLogo}>Free Market</TextLogo>
        </Logo>
        <NavBarContainer showMenu={isMobile}>
          <SearchBar />
          <ContainerDarkMode>
            <CheckBoxTheme />
            <Label>Dark Mode</Label>
          </ContainerDarkMode>
          <Menu isMobile={isMobile} onClick={handleShowMenu}>
            {menu.map((item) => {
              if (item === 'agregar productos' && !isLogged) return;
              return (
                <NavLink to={`/${item.replace(/ /g, '')}`} key={item} end>
                  {item}
                </NavLink>
              );
            })}
          </Menu>
        </NavBarContainer>
        <UserContainer>
          <div onClick={() => dispatch(toggleVisibleCart())}>
            <Badge itemsInCart={amountOfProductsInCart} card={false}>
              {amountOfProductsInCart}
            </Badge>
            <Cart src={cartImg} />
          </div>
          <ButtonUser onClick={handleLogin}>
            {isLogged ? (
              <img
                src={!!user?.photoURL ? user?.photoURL : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'}
                alt='logo user'
              />
            ) : (
              <FaUserCircle />
            )}

            {isLogged ? user?.name : 'Iniciar Sesión'}
          </ButtonUser>
        </UserContainer>
        <MobileIcon>
          {isMobile ? <VscChromeClose onClick={handleShowMenu} /> : <VscMenu onClick={handleShowMenu} />}
        </MobileIcon>
      </WrapperNav>
    </Wrapper>
  );
};

export default NavBar;
