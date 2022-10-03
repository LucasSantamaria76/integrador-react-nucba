import { ButtonUser, UserContainer } from './styles';
import { FaUserCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { setShowUserMenu } from '../../redux/slices';
import MenuUser from './MenuUser';
import { useNavigate } from 'react-router-dom';

export const User = () => {
  const { isLogged, user } = useSelector((state) => state.user);
  const { showUserMenu } = useSelector((state) => state.show);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleButtonUser = (e) => {
    e.stopPropagation();
    isLogged ? dispatch(setShowUserMenu(!showUserMenu)) : navigate('/login');
  };

  return (
    <UserContainer>
      <ButtonUser onClick={handleButtonUser}>
        {isLogged ? (
          <img
            src={!!user?.photoURL ? user?.photoURL : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'}
            alt='logo user'
            id='user'
          />
        ) : (
          <FaUserCircle />
        )}
        <p>{isLogged ? user?.name : 'Iniciar Sesión'}</p>
      </ButtonUser>
      <MenuUser />
    </UserContainer>
  );
};
