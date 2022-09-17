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
  MenuCategoryText,
  Wrapper,
} from './NavBar.styles';
import imageLogo from '../../assets/Free-Market-1080x675.webp';
import cartImg from '../../assets/cart.png';
import { Badge, Cart, CheckBoxTheme, Overlay } from '../common';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { VscChromeClose, VscMenu } from 'react-icons/vsc';
import { FaUserCircle } from 'react-icons/fa';
import {
  hideMenus,
  logout,
  setShowMenuCategory,
  setShowMenuMobile,
  setShowMenuUser,
  toggleVisibleCart,
} from '../../redux/slices';
import { useDispatch, useSelector } from 'react-redux';
import CartDrawer from './../CartDrawer/CartDrawer';
import { useResize } from './../../hooks/useResize';
import MenuCategory from '../Categories/MenuCategory';
import MenuUser from '../UserNav/MenuUser';

const NavBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { isTablet } = useResize();
  const { cart, isLogged, user } = useSelector((state) => state.user);
  const { showMenuCategory, showMenuUser, showMenuMobile } = useSelector((state) => state.menus);
  const dispatch = useDispatch();

  const menu = ['inicio', 'productos', 'favoritos'];

  const handleClickLogo = () => {
    dispatch(hideMenus());
    navigate('/');
  };

  const handleShowMenu = (e) => {
    e.stopPropagation();
    dispatch(setShowMenuMobile(!showMenuMobile));
  };

  const handleShowMenuCategory = (e) => {
    e.stopPropagation();
    dispatch(setShowMenuCategory(!showMenuCategory));
  };

  const handleButtonUser = (e) => {
    e.stopPropagation();
    isLogged ? dispatch(setShowMenuUser(!showMenuUser)) : navigate('/login');
  };

  const amountOfProductsInCart = cart.items.reduce((acc, item) => (acc += item.quantity), 0);

  return (
    <Wrapper onClick={() => dispatch(hideMenus())}>
      <WrapperNav>
        <CartDrawer />
        <Logo>
          <ImgLogo src={imageLogo} onClick={handleClickLogo} />
          <TextLogo>Free Market</TextLogo>
        </Logo>
        {isTablet && ['/favoritos', '/productos'].includes(pathname) && (
          <MenuCategoryText onClick={handleShowMenuCategory}>CATEGORIAS</MenuCategoryText>
        )}
        {showMenuCategory && (
          <Overlay onClick={() => dispatch(setShowMenuCategory(false))} isHidden={!showMenuCategory} />
        )}
        {showMenuCategory && <MenuCategory />}
        <NavBarContainer showMenu={showMenuMobile}>
          <SearchBar />
          <ContainerDarkMode>
            <CheckBoxTheme />
            <Label>Dark Mode</Label>
          </ContainerDarkMode>
          <Menu isMobile={showMenuMobile} onClick={handleShowMenu}>
            {menu.map((item) => {
              if (item === 'favorites' && !isLogged) return;
              return (
                <NavLink to={`/${item.replace(/ /g, '')}`} key={item} end>
                  {item}
                </NavLink>
              );
            })}
          </Menu>
        </NavBarContainer>
        <UserContainer>
          <div
            onClick={() => {
              dispatch(hideMenus());
              dispatch(toggleVisibleCart());
            }}>
            <Badge itemsInCart={amountOfProductsInCart} card={false}>
              {amountOfProductsInCart}
            </Badge>
            <Cart src={cartImg} />
          </div>
          <ButtonUser onClick={handleButtonUser}>
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
          {showMenuMobile ? <VscChromeClose onClick={handleShowMenu} /> : <VscMenu onClick={handleShowMenu} />}
        </MobileIcon>
      </WrapperNav>
      {showMenuUser && <MenuUser />}
    </Wrapper>
  );
};

export default NavBar;
