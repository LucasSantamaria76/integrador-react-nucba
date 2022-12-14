import { formatPrice } from '../../utils/formatPrice';
import { CardBody, CardFooter, CartContainer, Image, Info, Title, WrapperCard } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart, reduceStockProduct } from '../../redux/slices';
import { useNavigate } from 'react-router-dom';
import { BoxInfo } from '../BoxInfo';
import { Cart } from '../Cart';
import { toast, Toaster } from 'react-hot-toast';
import { ButtonFav } from '../Button';

const ProductsCard = ({ discount, id, name, price, stock, unit, urlPhoto, volume }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart, isLogged } = useSelector((state) => state.user);
  const { units } = useSelector((state) => state.units);
  const { theme } = useSelector((state) => state.theme);

  const handleAddCart = () => {
    if (!isLogged) {
      toast.error('Debes iniciar sesión para agregar al carrito', {
        position: 'top-center',
        duration: 1000,
        style: {
          padding: '10px',
          marginTop: '115px',
          borderRadius: '4px',
          background: theme === 'light' ? '#add1c7ca' : '#00313fca',
          color: theme === 'light' ? '#000' : '#fff',
          fontSize: '1.5rem',
        },
      });
      return;
    }
    if (!!stock) {
      dispatch(addProductToCart({ id, price, discount }));
      dispatch(reduceStockProduct(id));
    }
  };

  const amountOfProductInCart = cart.items?.find((item) => item.id === id)?.quantity;

  return (
    <WrapperCard>
      <Image url={urlPhoto} onClick={() => navigate(`/productDetails/${id}`)}>
        <BoxInfo stock={!!stock} show={!stock || !!discount}>
          {!stock && 'Sin stock'}
          {!!stock && !!discount && `${discount}% de descuento`}
        </BoxInfo>
      </Image>
      <CardBody>
        <Title>{name}</Title>
        <Info>
          <span>Precio</span>
          {formatPrice(price)}
        </Info>
        <Info>
          <span>Stock</span>
          {stock ? stock : '0'}
        </Info>
        <CardFooter>
          <h4>{`Precio x ${units[unit]?.conv} ${formatPrice(price * (units[unit]?.unit / volume))}`}</h4>
        </CardFooter>
        <Cart itemsInCart={amountOfProductInCart} stock={stock} onClick={handleAddCart} card />
        <ButtonFav id={id} size={1} pos='true' />
      </CardBody>
      <Toaster />
    </WrapperCard>
  );
};

export default ProductsCard;
