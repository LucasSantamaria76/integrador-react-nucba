import { useSelector } from 'react-redux';
import { UserInfo } from './components/UserInfo';
import { UserForm } from './components/UserForm';
import { ContainerPerfil } from './Styled-Components';

export const ModifyProfile = () => {
  const {
    user: { address, createdAt, id, phone, name, email, photoURL },
  } = useSelector((state) => state.user);

  return (
    <ContainerPerfil direction='column'>
      <UserInfo {...{ name, createdAt, email, photoURL }} />
      <UserForm {...{ id, name, address, email, phone }} />
    </ContainerPerfil>
  );
};
