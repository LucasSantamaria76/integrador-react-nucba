import { formatPrice } from '../../utils/formatPrice';
import { ButtonFav, CardBody, CardFooter, CartContainer, Image, Info, Title, WrapperCard } from './CardProducts.style';
import cartImg from '../../assets/cart.png';
import { Cart } from '../common';
import { useDispatch, useSelector } from 'react-redux';
import { addRemoveFavorite } from '../../redux/slices';
import { Toaster, toast } from 'react-hot-toast';

const CardProducts = ({ id, name, price, stock, unit, urlPhoto, volume }) => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const { units } = useSelector((state) => state.units);
  const { favorites, user } = useSelector((state) => state.user);

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
    <WrapperCard>
      <Image url={urlPhoto} />
      <CardBody>
        <Title>{name}</Title>
        <Info>
          <span>Precio</span>
          {formatPrice(price)}
        </Info>
        <Info>
          <span>Stock</span>
          {stock}
        </Info>
        <CardFooter>
          <h4>{`Precio x ${units[unit].conv} ${formatPrice(price * (units[unit].unit / volume))}`}</h4>
        </CardFooter>
        <CartContainer>
          <Cart src={cartImg} />
        </CartContainer>
        <ButtonFav type='button' onClick={handleFav}>
          {favorites?.includes(id) ? '❤️' : '🤍'}
        </ButtonFav>
      </CardBody>
      <Toaster />
    </WrapperCard>
  );
};

export default CardProducts;
