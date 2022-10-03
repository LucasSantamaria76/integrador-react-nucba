import { Navbar } from '../Navbar';
import { BackgroundHeader, Wrapper } from './styles';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { useResize } from '../../hooks/useResize';
import { useDispatch, useSelector } from 'react-redux';
import { setShowMovilMenu, setShowUserMenu, toggleVisibleCart } from '../../redux/slices';
import { ImgLogo, Logo, TextLogo } from '../Logo';
import imageLogo from '../../assets/Free-Market-1080x675.webp';
import { useNavigate } from 'react-router-dom';
import { User } from '../User';
import { Cart } from '../Cart';
import CartDrawer from '../CartDrawer';
import backgroundImage from '../../assets/backgroundImage.jpg';

const menu = ['Inicio', 'Productos', 'Favoritos'];

export const Header = () => {
  const { isDesktop } = useResize();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart, isLogged, user } = useSelector((state) => state.user);

  const handleClickLogo = () => {
    navigate('/');
  };

  const handleShowCart = () => dispatch(toggleVisibleCart());

  const amountOfProductsInCart = cart.items.reduce((acc, item) => (acc += item.quantity), 0);

  return (
    <BackgroundHeader backgroundImage={backgroundImage}>
      <Wrapper onClick={() => dispatch(setShowUserMenu(false))}>
        <Logo onClick={handleClickLogo}>
          <ImgLogo src={imageLogo} />
          <TextLogo>Free Market</TextLogo>
        </Logo>
        <Navbar list={menu} />
        <Cart itemsInCart={amountOfProductsInCart} stock onClick={handleShowCart} />
        <CartDrawer />
        <User />
        {!isDesktop && <AiOutlineMenuFold onClick={() => dispatch(setShowMovilMenu(true))} />}
      </Wrapper>
    </BackgroundHeader>
  );
};
