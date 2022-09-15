import { MenuUserContainer, MenuUserItem } from './MenuUser.styles';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slices';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const MenuUser = ({ setShowMenuUser }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const menuItems = ['Mis compras', 'Modificar perfil', 'Agregar productos', 'Modificar productos', 'Cerrar sesión'];

  const handleClick = (e) => {
    switch (e.target.textContent) {
      case menuItems[0]:
        setShowMenuUser(false);
        navigate('/miscompras');
        break;
      case menuItems[1]:
        setShowMenuUser(false);
        navigate('/modifyprofile');
        break;
      case menuItems[2]:
        setShowMenuUser(false);
        navigate('/agregarproductos');
        break;
      case menuItems[3]:
        setShowMenuUser(false);
        navigate('/updateproducts');
        break;
      case menuItems[4]:
        dispatch(logout());
        setShowMenuUser(false);
        break;
    }
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
