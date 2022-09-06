import styled from 'styled-components';
import { Toaster, toast } from 'react-hot-toast';
import { addRemoveFavorite } from '../../redux/slices';
import { useDispatch, useSelector } from 'react-redux';

const StyledButton = styled.button`
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : '50px')};
  background: none;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.text2};
  color: ${({ theme }) => theme.colors.text2};
  border-radius: 3px;
  font-size: 1.2rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  &:active {
    box-shadow: none;
  }
`;

export const Button = ({ type = 'button', children, handleClick, width, height }) => (
  <StyledButton type={type} onClick={handleClick} width={width} height={height}>
    {children}
  </StyledButton>
);

const ButtonFavStyled = styled.button`
  position: ${({ pos }) => (pos ? 'absolute' : 'static')};
  bottom: 5px;
  right: 5px;
  background-color: transparent;
  border: none;
  font-size: ${({ size }) => size + 'rem'};
`;

export const ButtonFav = ({ id, pos, size }) => {
  const dispatch = useDispatch();
  const { favorites, user } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);

  const handleFav = () => {
    !!user
      ? dispatch(addRemoveFavorite(id))
      : toast.error('Debes iniciar sesión para agregar a favoritos', {
          position: 'top-center',
          duration: 1500,
          style: {
            padding: '10px',
            marginTop: '115px',
            borderRadius: '4px',
            background: theme === 'light' ? '#add1c7ca' : '#00313fca',
            color: theme === 'light' ? '#000' : '#fff',
            fontSize: '1.5rem',
          },
        });
  };
  return (
    <>
      <ButtonFavStyled type='button' onClick={handleFav} size={size} pos={pos}>
        {favorites?.includes(id) ? '❤️' : '🤍'}
      </ButtonFavStyled>
      <Toaster />
    </>
  );
};
