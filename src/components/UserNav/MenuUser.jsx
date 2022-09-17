import { MenuUserContainer, MenuUserItem } from './MenuUser.styles';
import { useDispatch } from 'react-redux';
import { logout, setShowMenuUser } from '../../redux/slices';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const MenuUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const menuItems = ['Mis compras', 'Modificar perfil', 'Agregar productos', 'Modificar productos', 'Cerrar sesión'];

  const handleClick = (e) => {
    const option = e.target.textContent.toLowerCase().replace(/ /g, '');

    if (option === 'cerrarsesión') return dispatch(logout());

    return navigate(`/${option}`);
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
