import { MenuUserContainer, MenuUserItem } from './MenuUser.styles';
import { useDispatch, useSelector } from 'react-redux';
import { logout, setShowMenuUser } from '../../redux/slices';
import { useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Swal from 'sweetalert2';

const MenuUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { theme } = useSelector((state) => state.theme);
  const menuItems = ['Mis compras', 'Modificar perfil', 'Agregar productos', 'Modificar productos', 'Cerrar sesión'];

  const handleClick = (e) => {
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
    <>
      <AnimatePresence>
        <MenuUserContainer
          initial={{ translateX: 700 }}
          animate={{ translateX: 0 }}
          exit={{ translateX: 700 }}
          transition={{ type: 'spring', damping: 20 }}
          key='user-menu'>
          {menuItems.map((item) => (
            <MenuUserItem key={item} onClick={handleClick}>
              {item}
            </MenuUserItem>
          ))}
        </MenuUserContainer>
      </AnimatePresence>
    </>
  );
};

export default MenuUser;
