import { useSelector } from 'react-redux';

const UserNav = () => {
  const { user } = useSelector(state.user);

  return <div>UserNav</div>;
};

export default UserNav;
