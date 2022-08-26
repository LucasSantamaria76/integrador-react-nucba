import SearchBar from '../SearchBar/SearchBar';
import { ImgLogo, Label, LocationContainer, Logo, Menu, NavBarContainer, WrapperNav } from './NavBar.styles';
import imageLogo from '../../assets/Free-Market-1080x675.webp';
import cartImg from '../../assets/cart.png';
import { Cart, CheckBoxTheme } from '../common';
import { NavLink, useNavigate } from 'react-router-dom';
import { IoLocationOutline } from 'react-icons/io5';

const NavBar = () => {
  const navigate = useNavigate();
  const menu = [{ categorias: 'Categorias' }, { productos: 'Productos' }, { agregarProductos: 'Agregar productos' }];

  const handleClickLogo = () => navigate('/');

  return (
    <WrapperNav>
      <NavBarContainer>
        <ImgLogo src={imageLogo} onClick={handleClickLogo} />
        <Logo onClick={handleClickLogo}>Free Market</Logo>
        <SearchBar />
        <CheckBoxTheme />
        <Label>Dark Mode</Label>
        <Cart src={cartImg} onClick={handleClickLogo} />
      </NavBarContainer>
      <NavBarContainer>
        <LocationContainer>
          <IoLocationOutline size={25} />
          <div>
            <p>Enviar a</p>
            <p>Buenos Aires</p>
          </div>
        </LocationContainer>
        <Menu>
          {menu.map((item) => (
            <NavLink to={`/${Object.keys(item)[0]}`} key={Object.keys(item)[0]} end>
              {Object.values(item)[0]}
            </NavLink>
          ))}
        </Menu>
      </NavBarContainer>
    </WrapperNav>
  );
};

export default NavBar;
