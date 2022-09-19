import { useDispatch, useSelector } from 'react-redux';
import { Container } from './Styled-Components';
import { UserInfo } from './components/UserInfo';
import { UserForm } from './components/UserForm';
import { hideMenus } from '../../redux/slices';

export const ModifyProfile = () => {
  const dispatch = useDispatch();
  const {
    user: { address, createdAt, id, phone, name, email, photoURL },
  } = useSelector((state) => state.user);

  return (
    <Container onClick={() => dispatch(hideMenus())}>
      <UserInfo {...{ name, createdAt, email, photoURL }} />
      <UserForm {...{ id, name, address, email, phone }} />
    </Container>
  );
};
