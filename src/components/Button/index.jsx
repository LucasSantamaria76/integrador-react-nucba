import { ButtonFavStyled, ButtonStyled } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { toast, Toaster } from 'react-hot-toast';
import { addRemoveFavorite } from '../../redux/slices';

export const Button = ({
  children,
  bg,
  outline,
  h = '50px',
  r,
  w = '100%',
  shadow,
  disabled = false,
  type,
  handleClick,
}) => {
  return (
    <ButtonStyled
      outline={outline}
      bg={bg}
      h={h}
      r={r}
      w={w}
      shadow={shadow}
      disabled={disabled}
      type={type}
      onClick={handleClick}>
      {children}
    </ButtonStyled>
  );
};

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
