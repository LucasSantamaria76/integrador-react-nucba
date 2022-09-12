import { MenuUserContainer, MenuUserItem } from './MenuUser.styles';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slices';
import { useNavigate } from 'react-router-dom';

const MenuUser = ({ setShowMenuUser }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const menuItems = ['Mis compras', 'Modificar perfil', 'Cerrar sesión'];

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
        dispatch(logout());
        setShowMenuUser(false);
        break;
    }
  };
  return (
    <>
      <MenuUserContainer>
        {menuItems.map((item) => (
          <MenuUserItem key={item} onClick={handleClick}>
            {item}
          </MenuUserItem>
        ))}
      </MenuUserContainer>
    </>
  );
};

export default MenuUser;
