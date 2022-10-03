import { ContainerStyled } from './styles';
import { useDispatch } from 'react-redux';
import { setShowUserMenu } from '../../redux/slices';

export const Container = ({ children, direction, justify }) => {
  const dispatch = useDispatch();
  return (
    <ContainerStyled direction={direction} justify={justify} onClick={() => dispatch(setShowUserMenu(false))}>
      {children}
    </ContainerStyled>
  );
};
