import { MenuUserContainer, MenuUserItem } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { logout, setShowUserMenu } from '../../redux/slices';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useResize } from './../../hooks/useResize';

const MenuUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { theme } = useSelector((state) => state.theme);
  const { showUserMenu } = useSelector((state) => state.show);

  const menuItems = ['Mis compras', 'Modificar perfil', 'Agregar productos', 'Modificar productos', 'Cerrar sesión'];

  const handleClick = (e) => {
    dispatch(setShowUserMenu(false));
    //const { posMenuUser } = useResize();
    let option = `/${e.target.textContent.toLowerCase().replace(/ /g, '')}`;

    if (option === '/cerrarsesión') {
      option = pathname;
      Swal.fire({
        title: 'Cerrar sesión?',
        text: 'Seguro que desea cerrar la sesión!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: theme === 'light' ? '#5e8278' : '#215b6d',
        background: theme === 'light' ? '#add1c7' : '#00313F',
        color: theme === 'light' ? '#000' : '#fff',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(logout());
          return navigate(option);
        }
      });
    }

    return navigate(option);
  };

  return (
    <MenuUserContainer showMenu={showUserMenu}>
      {menuItems.map((item) => (
        <MenuUserItem key={item} onClick={handleClick}>
          {item}
        </MenuUserItem>
      ))}
    </MenuUserContainer>
  );
};

export default MenuUser;
