<<<<<<< HEAD
import { useSelector } from 'react-redux';
import { UserInfo } from './components/UserInfo';
import { UserForm } from './components/UserForm';
import { ContainerPerfil } from './Styled-Components';

export const ModifyProfile = () => {
=======
import { useDispatch, useSelector } from 'react-redux';
import { Container } from './Styled-Components';
import { UserInfo } from './components/UserInfo';
import { UserForm } from './components/UserForm';
import { hideMenus } from '../../redux/slices';

export const ModifyProfile = () => {
  const dispatch = useDispatch();
>>>>>>> refs/remotes/origin/master
  const {
    user: { address, createdAt, id, phone, name, email, photoURL },
  } = useSelector((state) => state.user);

  return (
<<<<<<< HEAD
    <ContainerPerfil direction='column'>
      <UserInfo {...{ name, createdAt, email, photoURL }} />
      <UserForm {...{ id, name, address, email, phone }} />
    </ContainerPerfil>
=======
    <Container onClick={() => dispatch(hideMenus())}>
      <UserInfo {...{ name, createdAt, email, photoURL }} />
      <UserForm {...{ id, name, address, email, phone }} />
    </Container>
>>>>>>> refs/remotes/origin/master
  );
};
